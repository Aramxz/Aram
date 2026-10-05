# Dirección de movimiento

La emoción buscada y la tarea del usuario determinan el movimiento. Elige una curva predominante, unas pocas duraciones y un patrón de entrada; permite excepciones con un propósito claro.

## Entrada del logo

Evita repetir la misma receta entre propuestas. Selecciona un mecanismo adecuado al símbolo y al proyecto con [movimiento por categoría](motion-patterns.md); los valores siguientes son una base temporal, no una animación idéntica para todos.

Incluye siempre una entrada breve del logo al abrir una página, salvo una instrucción explícita contraria o preferencia de movimiento reducido. Como punto inicial, usa 450–750 ms con desaceleración: ensamblaje sutil, giro pequeño del símbolo o desplazamiento corto con opacidad. Mantén el nombre reconocible y termina en su estado normal. No estires las letras ni conviertas el logo en un preloader que retrase la navegación.

En aplicaciones con rutas, ejecútala una vez al entrar en la página o vista, no al cambiar cada estado. En galerías puede ofrecerse un botón para repetirla. Conserva el estado final como base de HTML/CSS y no dependas de una animación infinita para hacerlo visible.

## Fondos tecnológicos

El movimiento abstracto de partículas, nodos y conexiones aporta profundidad sin competir con la tarea. Usa un único bucle, limita densidad y resolución en móvil, y detén el trabajo cuando la pestaña o la vista no estén visibles. Si utilizas canvas, evita crear nuevos bucles en cada resize.

Ofrece pausa para movimiento continuo. Con `prefers-reduced-motion`, muestra una composición estática y cancela el bucle; reacciona también a cambios de preferencia durante la sesión. Los controles y el texto deben funcionar sin canvas ni JavaScript.

## Paleta inicial ajustable

| Uso | Duración orientativa | Carácter |
| --- | --- | --- |
| Respuesta de control | 100–180 ms | Inmediata, recorrido mínimo |
| Cambio de estado | 180–300 ms | Clara, interrumpible |
| Entrada de sección | 300–550 ms | Desaceleración suave |
| Momento narrativo | 550–900 ms | Solo si aporta a la historia y no retrasa acciones |

Son valores iniciales de Aram, no requisitos universales ni presupuestos garantizados. En GSAP las duraciones se expresan en segundos; en CSS pueden expresarse en milisegundos.

Para entradas temporizadas prueba `power2.out`; para salidas, `power2.in`; para desplazamientos de ida y vuelta, `sine.inOut`. La interpolación `none` es apropiada cuando el progreso debe seguir directamente al scroll. Rebote y elasticidad requieren una marca o interacción que los justifique.

## Coreografía

El elemento principal establece el foco; los secundarios acompañan sin competir. Diseña el total de una secuencia, no solo cada tween: un stagger pequeño multiplicado por muchas tarjetas puede demorar demasiado la lectura. Usa un presupuesto total con `stagger: { amount: ... }` cuando convenga.

La anticipación y el seguimiento pueden hacer comprensible una acción, pero no son obligatorios para un formulario o un dashboard. Tampoco lo son las capas ambientales. Una transición de opacidad puede ser suficiente.

Define un final estable y un comportamiento para clics rápidos, cambio de ruta, scroll inverso y resize. No acumules tweens en cada evento de puntero.

## Accesibilidad y estados

En modo reducido elimina desplazamientos amplios, parallax, scrub decorativo y bucles; muestra la composición final. Un fade discreto puede ser apropiado, o un cambio inmediato. La información de éxito/error debe existir también como texto y estado accesible.

No escondas contenido esencial en CSS a la espera de JavaScript. Aplica estados iniciales de animación cuando su inicialización pueda completarse y restaura el contenido ante fallos. Evita destellos repetidos. Las animaciones automáticas prolongadas que acompañan otro contenido necesitan una forma adecuada de pausarse cuando corresponda.
