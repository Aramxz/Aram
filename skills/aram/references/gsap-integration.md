# Implementación GSAP

Inspecciona versiones y dependencias instaladas. Verifica en documentación oficial las APIs o plugins que no conozcas con certeza; no copies ejemplos externos sin revisar unidades, ciclo de vida y compatibilidad.

## Propiedad y limpieza

- Registra los plugins utilizados antes de crear animaciones. Carga únicamente lo necesario.
- Delimita selectores a la raíz del componente con `gsap.context()` o `useGSAP({ scope })`.
- En React, usa `useGSAP` de `@gsap/react` cuando esté disponible. Si usas efectos manuales, crea un contexto y llama `ctx.revert()` en su limpieza.
- Ejecuta acceso al DOM e inicialización de animaciones en el ciclo de vida del cliente. En Next.js, mantén esa lógica en un límite cliente apropiado.
- Para reconstrucción por cambios de dependencias, considera `revertOnUpdate: true`.
- Envuelve callbacks tardíos que crean animaciones con `contextSafe`; esto permite registrarlas para su limpieza. No sustituye cancelar timers, quitar listeners ni prevenir callbacks asíncronos después del desmontaje.
- Revierte solo los recursos que posee el componente. Evita `ScrollTrigger.getAll().forEach(kill)` como limpieza local porque afectaría otras secciones.
- No animes la misma propiedad con CSS y GSAP simultáneamente. Para hover repetido utiliza un tween reversible, `overwrite: "auto"` o `quickTo` según el caso.

## Responsive y movimiento reducido

Usa `gsap.matchMedia()` para crear y revertir escenas según condiciones, incluyendo `(prefers-reduced-motion: reduce)`. Considera cambios de preferencia durante la sesión. El estado estático base debe ser visible; en modo reducido puede bastar con no crear la escena.

Llama `mm.revert()` al desmontar su propietario. Los listeners y observadores propios también necesitan limpieza. No confundas cancelar un tween con restaurar todos los estilos originales; utiliza el contexto cuando corresponda.

## Timelines y scroll

- Usa una timeline para elementos con una misma secuencia. Las etiquetas y posiciones relativas hacen explícitas sus relaciones.
- Asigna ScrollTrigger a la timeline propietaria, no a sus tweens hijos con control independiente.
- Elige entre reproducir una entrada por umbral o vincular progreso con `scrub`.
- Para pinning, fija un contenedor estable y anima su contenido. Comprueba el espacio reservado y la salida de la escena.
- Crea triggers en orden de página. Recalcula con `ScrollTrigger.refresh()` después de cambios relevantes de geometría, como recursos cargados o paneles expandidos; no lo llames en cada frame.
- Usa valores calculados y `invalidateOnRefresh` cuando las distancias dependan del tamaño.
- En scroll horizontal simulado, calcula desplazamiento en píxeles con `x` y `scrollWidth - clientWidth`; no mezcles píxeles con `xPercent`. Si no hay desbordamiento, evita la escena fijada.
- Un tween utilizado como `containerAnimation` necesita `ease: "none"`; sus triggers dependientes no admiten pinning ni snapping. Revisa esas limitaciones antes de diseñar la escena.
- Retira markers de producción. Evita smooth scrolling adicional si no hay un requisito concreto.

## Rendimiento

Prefiere transformaciones y opacidad. Mide antes de utilizar filtros grandes, sombras animadas o muchas capas. Reserva `will-change` para casos concretos y retíralo cuando ya no sea útil. Evita lecturas y escrituras alternadas de layout en cada evento de puntero. Pausa escenas decorativas fuera de vista cuando su coste lo justifique.

## Documentación de referencia

- [GSAP](https://gsap.com/docs/v3/)
- [React y useGSAP](https://gsap.com/resources/React/)
- [matchMedia](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/)
- [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)

Las licencias de las skills de origen no sustituyen la licencia del runtime GSAP ni las condiciones de recursos de terceros.
