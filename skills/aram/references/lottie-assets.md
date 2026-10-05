# Cuándo usar Lottie

LottieFiles motion-design-skill aporta principios de animación independientes de la tecnología. Usar Aram no obliga a instalar un reproductor Lottie.

Usa Lottie o dotLottie para ilustraciones o secuencias vectoriales exportadas cuando exista un recurso adecuado. Usa GSAP para coordinar elementos de la página. Si solo se necesita un cambio sencillo en un icono, considera primero CSS o SVG.

## Integración

1. Confirma origen, permiso de uso, tamaño, dimensiones y apariencia del recurso. No inventes una URL de animación ni incluyas recursos remotos desconocidos.
2. Elige un reproductor compatible con el formato y el proyecto. Verifica su API actual antes de escribir integración; los métodos y eventos varían entre reproductores.
3. Reserva el espacio para evitar saltos de layout. Muestra un poster, SVG o estado estático si el recurso no carga o el usuario prefiere movimiento reducido.
4. Define quién controla el progreso: el reproductor o una secuencia GSAP. No permitas autoplay y control de frames por scroll compitiendo a la vez.
5. Detén trabajo decorativo fuera de vista o con la pestaña oculta cuando corresponda. Destruye el reproductor y retira listeners al desmontar.
6. Si la animación es decorativa, exclúyela del árbol accesible. Si comunica estado, proporciona texto o semántica equivalente independiente de los frames.

Documentación oficial: [dotLottie players](https://developers.lottiefiles.com/docs/dotlottie-player/).
