# Aram — Web Design & Motion

Skill de **Aramxz** para crear y pulir páginas con dirección visual propia, tipografía cuidada y movimiento con intención.

Combina principios de [LottieFiles motion-design-skill](https://github.com/LottieFiles/motion-design-skill) con prácticas de [GSAP skills](https://github.com/greensock/gsap-skills), y añade dirección de arte, adaptación móvil y revisión del resultado. Es una síntesis curada, no una copia completa ni un producto oficial de esas organizaciones.

## Así se ve Aram

**Aram Studio** es un ejemplo realizado con esta skill: composición editorial, tipografía protagonista, acentos naranja, arte original y movimiento con GSAP. Los proyectos mostrados son ficticios.

### Escritorio

![Aram Studio: portada editorial en escritorio](docs/screenshots/aram-studio-desktop.jpg)

### Proyectos

![Aram Studio: proyecto conceptual Forma](docs/screenshots/aram-studio-projects.jpg)

### Móvil

<img src="docs/screenshots/aram-studio-mobile.jpg" alt="Aram Studio: diseño adaptado a móvil" width="390">

Las capturas muestran el ejemplo real; son una referencia de calidad, no una plantilla obligatoria para todas las páginas.

## Criterio visual

**Tipografía nítida, composición precisa y efectos con propósito.** Aram evita tipografía neón, glow decorativo, gradientes arbitrarios y combinaciones repetitivas de tarjetas de cristal, halos y sombras exageradas. La identidad nace del contenido, la tipografía y la dirección de arte.

Los colores intensos siguen teniendo lugar: un acento naranja o azul bien utilizado no equivale a una estética neón.

## Instalar

```bash
npx skills add Aramxz/Aram --skill aram
```

Para instalar globalmente en Codex:

```bash
npx skills add Aramxz/Aram --skill aram --agent codex --global
```

El comando usa `npx skills add`, seguido del repositorio. No requiere publicar un paquete npm llamado Aram.

## Usar

```text
Usa $aram para crear una landing de mi estudio de diseño.
Quiero una estética editorial premium, proyectos protagonistas
y movimiento elegante. Debe funcionar muy bien en móvil.
```

```text
Usa $aram para pulir esta página sin cambiar su identidad.
Revisa composición, tipografía y animaciones, y corrige lo que
impida que se sienta profesional.
```

```text
Usa $aram para añadir una narrativa con GSAP a este portfolio.
Conserva el scroll nativo y prepara una versión sin desplazamientos
para quienes prefieren movimiento reducido.
```

## Versión actual · 0.3.0

- Dirección editorial premium como punto de partida ajustable.
- Criterios de jerarquía, composición, contenido y recursos visuales.
- Movimiento por propósito; CSS, GSAP y Lottie según necesidad.
- Ciclo de vida, limpieza, responsive y ScrollTrigger.
- Revisión de interacción, móvil, teclado y movimiento reducido.
- Criterios explícitos para evitar tipografía neón y decoración genérica.
- Entrada animada del logo al abrir la página, con alternativa estática accesible.
- Títulos de tipografía consistente, sin cambios gratuitos a cursivas.
- Fondos tecnológicos con partículas y conexiones sutiles; más color en redes sociales.

La skill aporta instrucciones reutilizables; no instala automáticamente GSAP, no incluye una web prediseñada y no garantiza puntuaciones de rendimiento. La evolución se basa en páginas reales y feedback concreto.

## Estructura

La skill instalable está en [`skills/aram`](skills/aram/SKILL.md). Sus referencias se consultan solo cuando la tarea las necesita. Los avisos de terceros viajan dentro de esa carpeta para conservar atribución al instalar.

Licencia MIT para esta skill; consulta [LICENSE](LICENSE) y [avisos de terceros](skills/aram/THIRD_PARTY_NOTICES.md).
