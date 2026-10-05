---
name: aram
description: Diseña y pule sitios web con dirección visual editorial, jerarquía tipográfica y animaciones intencionales. Combina principios de motion design con GSAP, ScrollTrigger y Lottie cuando corresponda. Úsala para landing pages, portfolios, sitios de marca y mejoras visuales de interfaces web; no para cambios de backend sin alcance visual.
license: MIT
metadata:
  author: Aramxz
  version: "0.1.0"
---

# Aram — diseño web con intención

Crea una experiencia que se reconozca por su composición, contenido y ritmo. Una página profesional debe funcionar y verse bien antes de añadir movimiento.

## Punto de partida

Inspecciona el proyecto, sus instrucciones, componentes, dependencias y recursos antes de modificarlo. Conserva la tecnología, identidad y alcance que haya elegido el usuario. Si solo pide pulir una sección, trabaja en esa sección.

Identifica audiencia, acción principal y carácter de marca. Pregunta únicamente por información que cambie decisiones relevantes; si falta una preferencia estética, declara una dirección provisional y avanza. Usa el idioma del usuario para la conversación y el idioma del producto para su contenido.

Como punto de partida para un proyecto sin identidad, usa **editorial premium**: tipografía protagonista, composición con contraste de escala, espacio generoso y movimiento contenido. Es una propuesta ajustable, no una plantilla obligatoria. Lee [dirección visual](references/design-direction.md) cuando debas definir o revisar la identidad.

## De la idea a la página

1. Resume la dirección en pocas líneas: objetivo, tono, recurso visual principal y papel del movimiento. En tareas pequeñas basta con aplicarla sin producir un documento adicional.
2. Construye una composición estática con contenido útil, jerarquía y una acción principal clara. Ajusta escritorio y móvil antes de añadir secuencias complejas.
3. Define un pequeño vocabulario de movimiento. Para cada efecto, identifica qué comunica, qué lo activa y qué ocurre al interrumpirlo o reducir el movimiento. Consulta [dirección de movimiento](references/motion-direction.md).
4. Usa CSS para interacciones sencillas; GSAP para secuencias, control reversible o scroll coordinado; Lottie para ilustraciones animadas cuando exista un recurso adecuado. No es necesario cargar las tres tecnologías.
5. Implementa solo lo que mejora la experiencia. Para GSAP, React y scroll consulta [implementación](references/gsap-integration.md). Para archivos Lottie consulta [recursos Lottie](references/lottie-assets.md).
6. Revisa el resultado real en navegador y corrige problemas observables. Usa [revisión de entrega](references/quality-review.md) según el alcance. Informa qué verificaste y qué no pudiste comprobar.

## Criterios de Aram

- El diseño debe tener una decisión reconocible: tipografía, fotografía, ilustración, composición o tratamiento de producto. No sustituyas identidad por una acumulación de efectos.
- El contenido define las secciones. Evita repetir siempre hero, tres tarjetas y CTA cuando la historia requiere otra estructura.
- Mantén legibles el mensaje, la navegación y la acción principal desde el primer estado. No bloquees la visita con un preloader decorativo.
- El movimiento guía la atención o explica cambios. Capas ambientales, rebotes, parallax, cursor personalizado y scroll horizontal son opcionales.
- Conserva scroll nativo salvo necesidad explícita. Ninguna interacción esencial depende solo de hover, arrastre o animación.
- Respeta `prefers-reduced-motion` tanto en CSS como en JavaScript. El modo reducido conserva contenido, acciones y significado.
- No inventes clientes, cifras, testimonios, premios ni resultados. Los datos de demostración se identifican como tales.
- No publiques ni despliegues por el mero hecho de usar esta skill; respeta la autorización del encargo concreto.

## Cómo pulir una iteración

Describe el problema visible y corrige primero su causa: composición, tipografía, contenido, recursos, interacción o movimiento. Cambia las variables que lo explican y vuelve a revisar. Si el usuario pide “más pro”, identifica decisiones concretas; no respondas añadiendo animaciones indiscriminadamente.

Al entregar, enlaza el resultado, menciona las decisiones principales y las limitaciones pendientes. No atribuyas métricas de rendimiento o accesibilidad sin medición.

## Procedencia

Síntesis adaptada de [LottieFiles/motion-design-skill](https://github.com/LottieFiles/motion-design-skill) y [greensock/gsap-skills](https://github.com/greensock/gsap-skills), con dirección web propia de Aram. Las reglas de esta skill prevalecen sobre recomendaciones estilísticas de las fuentes: no se exigen tres capas animadas ni se prohíben fades, y el scroll con scrub puede requerir interpolación lineal. Consulta [créditos y licencias](THIRD_PARTY_NOTICES.md).
