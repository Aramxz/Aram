(() => {
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const hero = document.querySelector('.hero');
const pause = document.querySelector('#pause');
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const buttons = [...document.querySelectorAll('[data-mode]')];
let width = 0, height = 0, left = 0, top = 0, frame = 0, last = 0, phase = 0;
let paused = false, visible = true, inside = false, influence = 0, scrollMix = 0;
let targetX = 0, targetY = 0, pointerX = 0, pointerY = 0, mode = 'wave';
let orbital = 0, grid = 0, points = [], drawX, drawY, drawR, bins;
const colors = Array.from({length: 8}, (_, i) => `rgba(235,235,235,${.22 + i * .1})`);
const smooth = (rate, dt) => 1 - Math.exp(-rate * dt);
const active = () => !paused && !reduced.matches && !document.hidden && visible;

function seed(count) {
  // Cache geometry that does not change between frames.
  points = Array.from({length: count}, (_, i) => {
    const u = i / count, v = (i * .61803398875) % 1;
    const a = u * Math.PI * 2, b = v * Math.PI * 2;
    const r = .72 + .23 * Math.cos(b), oy = .23 * Math.sin(b), oz = r * Math.sin(a);
    return {wx: (u * 2 - 1) * 1.45, wz: (v * 2 - 1) * .8,
      ox: r * Math.cos(a), oy: oy * .8 - oz * .5, oz: oy * .5 + oz * .8,
      gx: (u * 2 - 1) * 1.1, gy: (v * 2 - 1) * .8, noise: u * 12 + v * 8};
  });
  drawX = new Float32Array(count); drawY = new Float32Array(count);
  drawR = new Float32Array(count); bins = new Uint8Array(count);
}

function draw() {
  ctx.clearRect(0, 0, width, height);
  const scale = Math.min(width * .32, height * .61);
  const rotation = phase * .13, c = Math.cos(rotation), s = Math.sin(rotation);
  const orbitWeight = orbital * (1 - scrollMix), gridWeight = grid * (1 - scrollMix);
  const radius = Math.min(width * .32, 190), radiusSquared = radius * radius;
  for (let i = 0; i < points.length; i++) {
    const q = points[i], wy = q.wz * .65 + Math.sin(q.wx * 3 + q.wz * 4 + phase) * .065;
    const ox = q.ox * c + q.oz * s, oz = -q.ox * s + q.oz * c;
    const x = q.wx + (ox - q.wx) * orbitWeight + (q.gx - q.wx) * gridWeight;
    const y = wy + (q.oy - wy) * orbitWeight + (q.gy - wy) * gridWeight;
    const z = q.wz + (oz - q.wz) * orbitWeight + (Math.sin(q.noise + phase * .4) * .12 - q.wz) * gridWeight;
    const perspective = 2.8 / (2.8 + z);
    let px = width / 2 + x * scale * perspective, py = height / 2 + y * scale * perspective;
    let envelope = 0;
    if (influence > .001) {
      const dx = px - pointerX, dy = py - pointerY, distanceSquared = dx * dx + dy * dy;
      // Skip expensive ripple math outside the cursor's area of influence.
      if (distanceSquared < radiusSquared * 6.25) {
        envelope = Math.exp(-distanceSquared / radiusSquared) * influence;
        const crest = Math.cos(Math.sqrt(distanceSquared) * .029 - phase * 2.5) * envelope;
        px += dx * envelope * .07;
        py -= crest * 43;
      }
    }
    drawX[i] = px; drawY[i] = py;
    drawR[i] = Math.max(.6, 1.1 * perspective) + envelope * .45;
    bins[i] = Math.max(0, Math.min(7, Math.round(((z + 1.5) / 3 * .5 + envelope * .25) / .1)));
  }
  // Eight fills per frame instead of one fill per particle.
  for (let bucket = 0; bucket < colors.length; bucket++) {
    ctx.beginPath();
    for (let i = 0; i < points.length; i++) if (bins[i] === bucket) {
      ctx.moveTo(drawX[i] + drawR[i], drawY[i]);
      ctx.arc(drawX[i], drawY[i], drawR[i], 0, Math.PI * 2);
    }
    ctx.fillStyle = colors[bucket]; ctx.fill();
  }
}

function tick(time) {
  frame = 0;
  if (!active()) return;
  const dt = Math.min((time - last) / 1000, .05); last = time; phase += dt;
  const follow = smooth(15, dt), settle = smooth(6, dt);
  pointerX += (targetX - pointerX) * follow; pointerY += (targetY - pointerY) * follow;
  influence += ((inside ? 1 : 0) - influence) * smooth(7, dt);
  scrollMix += (Math.max(0, Math.min(1, (scrollY - top) / 480)) - scrollMix) * settle;
  orbital += ((mode === 'orbital' ? 1 : 0) - orbital) * settle;
  grid += ((mode === 'grid' ? 1 : 0) - grid) * settle;
  draw(); frame = requestAnimationFrame(tick);
}

function sync() {
  cancelAnimationFrame(frame); frame = 0;
  hero.dataset.paused = String(paused || reduced.matches);
  pause.disabled = reduced.matches;
  pause.innerHTML = reduced.matches ? 'movimiento reducido' : paused ? 'reanudar movimiento <span aria-hidden="true">▷</span>' : 'pausar movimiento <span aria-hidden="true">Ⅱ</span>';
  pause.setAttribute('aria-pressed', String(paused));
  draw();
  if (active()) {last = performance.now(); frame = requestAnimationFrame(tick);}
}
function resize() {
  const box = canvas.getBoundingClientRect();
  width = box.width; height = box.height; left = box.left; top = box.top + scrollY;
  const count = width < 650 ? 420 : 720;
  if (points.length !== count) seed(count);
  const dpr = Math.min(devicePixelRatio || 1, width < 650 ? 1.25 : 1.5);
  canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0); draw();
}
pause.addEventListener('click', () => {paused = !paused; sync();});
buttons.forEach(button => button.addEventListener('click', () => {
  mode = button.dataset.mode;
  buttons.forEach(b => b.setAttribute('aria-pressed', String(b === button)));
  if (!active()) {orbital = Number(mode === 'orbital'); grid = Number(mode === 'grid'); draw();}
}));
hero.addEventListener('pointermove', e => {
  if (e.pointerType === 'touch' || !active()) return;
  targetX = e.clientX - left; targetY = e.clientY + scrollY - top;
  if (!inside && influence < .01) {pointerX = targetX; pointerY = targetY;}
  inside = true;
}, {passive: true});
hero.addEventListener('pointerleave', () => {inside = false;});
new ResizeObserver(resize).observe(canvas);
new IntersectionObserver(entries => {visible = entries[0].isIntersecting; sync();}).observe(canvas);
document.addEventListener('visibilitychange', sync);
reduced.addEventListener('change', () => {
  if (reduced.matches) {influence = scrollMix = 0; inside = false; orbital = Number(mode === 'orbital'); grid = Number(mode === 'grid');}
  sync();
});
resize(); sync();

})();
