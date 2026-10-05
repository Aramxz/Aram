---
name: aram
description: Diseña y pule sitios web con dirección visual editorial, jerarquía tipográfica y animaciones intencionales. Combina principios de motion design con GSAP, ScrollTrigger y Lottie cuando corresponda. Úsala para landing pages, portfolios, sitios de marca y mejoras visuales de interfaces web; no para cambios de backend sin alcance visual.
license: MIT
metadata:
  author: Aramxz
  version: "0.4.4"
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

- En diseños futuristas, prioriza siempre blanco y negro como paleta principal, con grises para profundidad y jerarquía. Construye identidad con contraste, composición, materiales y movimiento; reserva acentos de color mínimos para una función concreta o una petición explícita, sin neón ni pasteles de relleno.

- En portadas con animación, sitúa el título delante de ella, en la misma escena: texto y acciones en primer plano y movimiento como fondo integrado. No separes la animación en un panel debajo del título. Mantén contraste, interacción y lectura en móvil y con movimiento reducido.
- Prioriza el título principal centrado horizontalmente en la portada, con su bloque cerca del eje central de la composición, tanto en escritorio como en móvil. No uses por rutina un hero con título pegado a la izquierda. Conserva alineación de lectura en párrafos largos, formularios y datos.
- Evita paletas pastel genéricas por defecto: lavanda, rosa empolvado, menta y melocotón combinados sin identidad. Prefiere neutros definidos y acentos con carácter, contraste legible y relación con la marca; no sustituyas pastel por neón. Respeta una paleta de marca o petición explícita.

- Prioriza minúsculas en el texto original de la interfaz: títulos, navegación, botones y etiquetas. No fuerces `text-transform: lowercase` global ni alteres nombres legales, marcas con grafía obligatoria, siglas técnicas, código, contraseñas o contenido aportado por usuarios.
- Diseña una firma de movimiento diferente para cada proyecto; no reutilices la misma entrada de logo y fade en todas las categorías. Selecciona scroll, SVG, texto o interacciones según su función y presupuesto. Consulta [movimiento por categoría](references/motion-patterns.md) y [referencias de inspiración](references/inspiration.md).
- Incluye una animación breve del logo al abrir cada página: una sola entrada, sin bloquear contenido ni repetirla por cada render. Respeta movimiento reducido y muestra el logo estático si JavaScript falla. Consulta [dirección de movimiento](references/motion-direction.md#entrada-del-logo).
- Mantén la misma familia tipográfica y estilo recto dentro del título. Evita alternar palabras en serif o cursiva como firma automática; crea jerarquía mediante tamaño, peso, composición y color.
- En aplicaciones de tecnología, prioriza un fondo con movimiento abstracto sutil inspirado en nanotecnología: partículas, nodos o conexiones, sin glow ni neón y lejos de zonas de lectura. En redes sociales, usa más color en fondos y superficies con funciones claras. Consulta [fondos por contexto](references/design-direction.md#fondos-por-contexto).
- Evita tipografía neón, letras con glow y resplandores decorativos. Prioriza formas tipográficas nítidas, buena composición y materiales visuales cuidados. No adoptes una estética futurista genérica por defecto.
- Evita acabados de plantilla: gradientes multicolor arbitrarios, tarjetas de cristal repetidas, sombras exageradas y efectos acumulados sin relación con la marca. Usa los criterios concretos de [dirección visual](references/design-direction.md#acabado-visual-sin-efectos-de-relleno) para revisar el resultado.
- El diseño debe tener una decisión reconocible: tipografía, fotografía, ilustración, composición o tratamiento de producto. No sustituyas identidad por una acumulación de efectos.
- El contenido define las secciones. Evita repetir siempre hero, tres tarjetas y CTA cuando la historia requiere otra estructura.
- Mantén legibles el mensaje, la navegación y la acción principal desde el primer estado. No bloquees la visita con un preloader decorativo.
- El movimiento guía la atención o expresa identidad. La entrada del logo forma parte del estilo Aram; el fondo tecnológico sigue las pautas por contexto. Rebotes, parallax, cursor personalizado y scroll horizontal requieren una razón concreta.
- Conserva scroll nativo salvo necesidad explícita. Ninguna interacción esencial depende solo de hover, arrastre o animación.
- Respeta `prefers-reduced-motion` tanto en CSS como en JavaScript. El modo reducido conserva contenido, acciones y significado.
- No inventes clientes, cifras, testimonios, premios ni resultados. Los datos de demostración se identifican como tales.
- No publiques ni despliegues por el mero hecho de usar esta skill; respeta la autorización del encargo concreto.

## Cómo pulir una iteración

Describe el problema visible y corrige primero su causa: composición, tipografía, contenido, recursos, interacción o movimiento. Cambia las variables que lo explican y vuelve a revisar. Si el usuario pide “más pro”, identifica decisiones concretas; no respondas añadiendo animaciones indiscriminadamente.

Al entregar, enlaza el resultado, menciona las decisiones principales y las limitaciones pendientes. No atribuyas métricas de rendimiento o accesibilidad sin medición.

## Procedencia

Síntesis adaptada de [LottieFiles/motion-design-skill](https://github.com/LottieFiles/motion-design-skill) y [greensock/gsap-skills](https://github.com/greensock/gsap-skills), con dirección web propia de Aram. Las reglas de esta skill prevalecen sobre recomendaciones estilísticas de las fuentes: no se exigen tres capas animadas ni se prohíben fades, y el scroll con scrub puede requerir interpolación lineal. Consulta [créditos y licencias](THIRD_PARTY_NOTICES.md).
