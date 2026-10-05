# Revisión de entrega

Aplica las comprobaciones relevantes para lo modificado. No conviertas un ajuste visual pequeño en una auditoría completa.

## Inspección visual y funcional

- En una dirección futurista, comprueba que dominen blanco y negro, con grises de apoyo y acentos mínimos justificados.

- Verifica que el título principal tenga una composición centrada en escritorio y móvil, salvo dirección explícita distinta, y que la paleta no recurra a pasteles genéricos sin relación con la marca.

- Comprueba copy original en minúsculas y una firma de movimiento adecuada al proyecto. En galerías, verifica que los efectos difieran realmente en mecanismo y composición. No declares optimización medida sin evidencia.
- Revisa el acabado: tipografía nítida, sin neón ni glow decorativo; colores, sombras y movimiento con una función clara. Corrige composición y jerarquía antes de añadir efectos.
- Comprueba la entrada del logo, su estado estático con movimiento reducido y que no se repita al interactuar. Revisa títulos sin mezclas gratuitas de fuentes o cursivas. En fondos tecnológicos, prueba pausa y cambio de vista; en redes sociales, valida que el color conserve legibilidad.
- Revisa la página real a un ancho móvil y uno de escritorio, y cerca de los breakpoints modificados. Busca desbordamiento, recortes, saltos tipográficos y espacios incoherentes.
- Comprueba que la acción principal, enlaces, menú y controles involucrados funcionan. Incluye estados vacíos, carga o error si forman parte del cambio.
- Usa teclado y foco visible; revisa que el orden de lectura sea coherente y que overlays no dejen el foco perdido.
- Activa movimiento reducido y confirma que contenido y acciones siguen disponibles. Prueba también el estado inicial y, cuando sea viable, el fallo de recursos animados.
- En escenas GSAP prueba resize, scroll inverso, activaciones repetidas y salida/regreso de ruta. Busca triggers duplicados, estilos residuales y errores de consola.
- Comprueba que imágenes y fuentes no desplazan inesperadamente la composición. Optimiza los recursos que realmente dominan la carga.
- Ejecuta los checks existentes pertinentes. No declares validación visual por el solo hecho de que el build compile.

## Evidencia y pulido

Una captura permite revisar composición; la interacción real permite revisar ritmo y comportamiento. Si no dispones de navegador o medición, explica la limitación sin inventar resultados.

Prioriza fallos funcionales o contenido inaccesible, luego composición y legibilidad, después refinamiento del movimiento. Entrega un resumen de lo observado y corregido; no afirmes puntuaciones Lighthouse, fps o cumplimiento formal sin pruebas.
