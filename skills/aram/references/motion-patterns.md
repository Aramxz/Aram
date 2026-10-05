# movimiento por categoría

Cada proyecto tiene una firma, no una colección de demos. Elige un gesto principal y respuestas secundarias coherentes. En una galería de propuestas, diferencia composición, mecanismo y ritmo; cambiar únicamente duración o color del mismo tween no basta.

| categoría | entrada del logo sugerida | movimiento principal | interacción secundaria |
| --- | --- | --- | --- |
| creativo | revelado con máscara o ensamblaje breve de piezas | escenas editoriales coordinadas al scroll | transición espacial de proyectos |
| tienda | aparición breve del símbolo seguida del nombre | transición suave entre imágenes de producto | confirmación inmediata al agregar o cambiar variante |
| futurista | recorrido SVG que conecta partes del símbolo | red abstracta de nodos o profundidad ligada al avance | respuesta direccional discreta de controles |
| proyecto / producto | trazo que resuelve en el logo final | progresión por módulos o pasos de una demostración | cambio de pestañas con continuidad |
| red social | escala breve del símbolo con estabilización | entradas cortas de contenido nuevo | reacción, guardado y expansión de comentarios |

Son alternativas, no plantillas obligatorias. El logo entra una vez sin bloquear lectura y queda estático al terminar. No alteres su diseño oficial para forzar un efecto.

## escoger la herramienta

**scroll:** ScrollTrigger para umbrales, scrub o secuencias; fija una sección únicamente si mejora la historia. Mantén scroll nativo y una versión móvil legible sin largos tramos fijados. No asignes un ScrollTrigger a cada letra.

**svg:** DrawSVG para recorridos de trazo, MorphSVG para cambios de forma cuando se justifiquen, MotionPath para seguimiento de un recorrido. Verifica compatibilidad y coste de los paths; una transformación sencilla no necesita morphing. No dibujes marcas ajenas de memoria.

**texto:** SplitText cuando dividir líneas o palabras aporte narrativa. Conserva lectura accesible y enlaces; recompón al cambiar tipografía o ancho y revierte al desmontar. Prefiere palabras/líneas a cientos de caracteres. Reserva ScrambleText para acentos breves, nunca para precios, errores, formularios o texto que el usuario deba leer inmediatamente. No cambies de fuente ni uses cursivas para simular movimiento.

**ui:** Flip para continuidad al reorganizar elementos; tweens reversibles para hover y foco; Draggable solo con alternativa de teclado y controles visibles. Las acciones ocurren de inmediato; no esperan una animación decorativa.

## optimización verificable

- Carga solo plugins necesarios; respeta el empaquetado existente y difiere escenas pesadas fuera de la primera vista.
- Favorece transformaciones y opacidad. Evita animar layout, blur grande o sombras extensas por frame.
- Agrupa medidas de geometría, recalcula tras cambios reales y no fuerces layout en cada evento de scroll o puntero.
- Mantén un propietario y limpieza por escena; cancela listeners, timelines y bucles al desmontar. Evita recrearlos en cada render.
- Pausa efectos continuos fuera de vista y en pestañas ocultas. Limita densidad y resolución de canvas en móvil. Usa partición espacial o vecinos precomputados si muchas partículas vuelven costosas las comparaciones por pares.
- Respeta movimiento reducido desde el primer frame, cambios de preferencia durante la sesión y pausa manual. Entrega estados estáticos equivalentes.
- Comprueba scroll inverso, resize, navegación, clics rápidos y una pantalla móvil. Si declaras mejoras de rendimiento, mide antes/después bajo las mismas condiciones y registra dispositivo, escena y herramienta. No prometas fps ni puntuaciones sin medición.

Documentación: [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/), [DrawSVG](https://gsap.com/docs/v3/Plugins/DrawSVGPlugin/), [MorphSVG](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/), [SplitText](https://gsap.com/docs/v3/Plugins/SplitText/), [Flip](https://gsap.com/docs/v3/Plugins/Flip/).

## respuesta al visitante

El movimiento debe invitar a explorar: una escena futurista puede orientar sus partículas con el cursor y desplegar una onda gradualmente al bajar. Usa rangos pequeños e interpolación suave; conserva el scroll nativo, permite volver atrás y no secuestres el puntero. Calcula dimensiones fuera de los eventos de movimiento y procesa los objetivos en un único bucle de render.

En páginas donde aporte carácter, revela, desplaza unos píxeles o cambia suavemente el tono de palabras al pasar el cursor. Puedes alternar palabras semánticamente equivalentes en un acento editorial, reservando espacio para evitar saltos. No cambies enlaces, precios, instrucciones ni mensajes esenciales. No combines todos los efectos en cada página, ni cambies la tipografía para animar.

Aplica hover únicamente donde exista puntero preciso. Los controles interactivos deben responder también a foco y teclado; no conviertas texto decorativo en un control enfocable. En táctil conserva texto y acciones sin requerir hover. Con pausa manual o movimiento reducido, detén también el movimiento decorativo ligado al cursor y scroll y muestra un estado legible.
