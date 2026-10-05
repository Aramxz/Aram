import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { parseOptions, installArgs } from '../bin/aram.mjs';

test('both agents and global scope are explicit and preserve a path with spaces', () => {
  assert.deepEqual(installArgs(parseOptions(['--agent','both','--scope','global']), '/a path/aram'), ['add','/a path/aram','--skill','aram','--agent','codex','claude-code','--global','--yes']);
});
test('project install does not request global scope', () => {
  assert.ok(!installArgs(parseOptions(['--agent','claude-code','--scope','project']), '/aram').includes('--global'));
});
test('invalid and incomplete choices fail before installing', () => {
  for (const args of [['--agent'], ['--scope'], ['--agent','bad'], ['--scope','bad'], ['--unknown']]) assert.throws(() => parseOptions(args));
  assert.throws(() => installArgs(parseOptions([]), '/aram'));
});
test('non-interactive invocation never silently chooses agents', () => {
  const r = spawnSync(process.execPath, ['bin/aram.mjs'], { encoding:'utf8' });
  assert.equal(r.status, 1);
  assert.match(r.stdout, /Aramxz/);
  assert.match(r.stderr, /--agent y --scope/);
});
test('dry run is successful and does not launch installation', () => {
  const r = spawnSync(process.execPath, ['bin/aram.mjs','--agent','codex','--scope','project','--dry-run'], { encoding:'utf8' });
  assert.equal(r.status, 0);
  assert.match(r.stdout, /"install": false/);
});
