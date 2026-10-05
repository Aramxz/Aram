#!/usr/bin/env node
import { createInterface } from 'node:readline/promises';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';
import { createRequire } from 'node:module';
import { realpathSync } from 'node:fs';
import { printBanner } from './banner.mjs';

export function parseOptions(args) {
  const options = { agent: null, scope: null, dryRun: false, help: false };
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--agent') options.agent = args[++i];
    else if (arg === '--scope') options.scope = args[++i];
    else if (arg === '--dry-run') options.dryRun = true;
    else if (arg === '--help' || arg === '-h') options.help = true;
    else throw new Error(`opción desconocida: ${arg}`);
  }
  if (options.agent !== null && !['codex', 'claude-code', 'both'].includes(options.agent)) throw new Error('usa --agent codex, claude-code o both');
  if (options.scope !== null && !['global', 'project'].includes(options.scope)) throw new Error('usa --scope global o project');
  return options;
}

export function installArgs(options, source) {
  if (!options.agent || !options.scope) throw new Error('elige agente y alcance antes de instalar');
  const agents = options.agent === 'both' ? ['codex', 'claude-code'] : [options.agent];
  return ['add', source, '--skill', 'aram', '--agent', ...agents, ...(options.scope === 'global' ? ['--global'] : []), '--yes'];
}

async function main() {
  printBanner();
  const options = parseOptions(process.argv.slice(2));
  if (options.help) {
    console.log('uso: aram [--agent codex|claude-code|both] [--scope global|project] [--dry-run]\nsin opciones: elige agente y alcance en el menú.\n--dry-run: muestra la operación sin instalar.\nrequiere node.js 20 o posterior.');
    return;
  }
  if (!options.agent || !options.scope) {
    if (!process.stdin.isTTY || !process.stdout.isTTY) throw new Error('en una terminal no interactiva indica --agent y --scope; no se instalará por defecto');
    const rl = createInterface({ input: process.stdin, output: process.stdout });
    try {
      while (!options.agent) {
        const answer = (await rl.question('¿dónde instalar?\n  1. codex\n  2. claude code\n  3. ambos\n  0. salir\nselección: ')).trim();
        if (answer === '0') return;
        options.agent = { 1: 'codex', 2: 'claude-code', 3: 'both' }[answer] ?? null;
        if (!options.agent) console.log('elige 1, 2, 3 o 0.');
      }
      while (!options.scope) {
        const answer = (await rl.question('\n¿en qué alcance?\n  1. global (todos tus proyectos)\n  2. proyecto actual\n  0. salir\nselección: ')).trim();
        if (answer === '0') return;
        options.scope = { 1: 'global', 2: 'project' }[answer] ?? null;
        if (!options.scope) console.log('elige 1, 2 o 0.');
      }
    } finally { rl.close(); }
  }
  const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
  const args = installArgs(options, root);
  console.log(`\naram · Aramxz\nagente: ${options.agent}\nalcance: ${options.scope}\nproyecto actual: ${process.cwd()}\n`);
  if (options.dryRun) { console.log(JSON.stringify({ executable: process.execPath, arguments: args, install: false }, null, 2)); return; }
  // Delegate to the pinned official skills CLI; never interpolate shell commands.
  const require = createRequire(import.meta.url);
  const cli = resolve(dirname(require.resolve('skills/package.json')), 'bin', 'cli.mjs');
  const child = spawn(process.execPath, [cli, ...args], { stdio: 'inherit', shell: false });
  child.on('error', error => { console.error(`no se pudo iniciar el instalador: ${error.message}`); process.exitCode = 1; });
  child.on('exit', (code, signal) => {
    process.exitCode = code ?? 1;
    if (code === 0) console.log('\naram instalada · creado por Aramxz\nabre una sesión nueva del agente para usarla.');
    else console.error(`la instalación no terminó correctamente (${signal ?? code}).`);
  });
}

if (process.argv[1] && realpathSync(process.argv[1]) === realpathSync(fileURLToPath(import.meta.url))) {
  main().catch(error => { console.error(`aram: ${error.message}`); process.exitCode = 1; });
}
