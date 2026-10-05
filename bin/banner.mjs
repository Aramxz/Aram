const letters = [
  ' █████╗ ██████╗  █████╗ ███╗   ███╗',
  '██╔══██╗██╔══██╗██╔══██╗████╗ ████║',
  '███████║██████╔╝███████║██╔████╔██║',
  '██╔══██║██╔══██╗██╔══██║██║╚██╔╝██║',
  '██║  ██║██║  ██║██║  ██║██║ ╚═╝ ██║',
  '╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝',
];

export function printBanner() {
  const color = process.stdout.isTTY && !('NO_COLOR' in process.env) && process.env.TERM !== 'dumb';
  const shades = [97, 97, 37, 37, 90, 90];
  const compact = process.stdout.isTTY && process.stdout.columns && process.stdout.columns < 40;
  console.log();
  for (const [index, line] of (compact ? ['aram'] : letters).entries()) {
    console.log(`  ${color ? `\x1b[${shades[index]}m${line}\x1b[0m` : line}`);
  }
  console.log('\n  diseño web + movimiento\n  creado por Aramxz\n');
}
