# plantilla e inspiración mono

Mono es la base visual aprobada por Aramxz. Priorízala al iniciar páginas modernas, tecnológicas o creativas y como referencia de limpieza para otros sitios. Úsala como plantilla cuando el encargo encaje; en tiendas, redes sociales o aplicaciones, adapta estos principios a su actividad principal sin sustituirla por una portada de demostración. Las instrucciones explícitas y la identidad existente prevalecen.

## recursos incluidos

La carpeta [assets/mono](../assets/mono/) contiene `index.html`, `style.css`, `app.js` e `icon.svg`. Es una página estática funcional, sin herramientas de compilación. Copia los cuatro archivos al proyecto nuevo; para proyectos con framework, integra solo los componentes necesarios y conserva su arquitectura. No copies credenciales, manifiestos de hosting ni archivos Git. El CSS carga Manrope desde Google Fonts y tiene fallback local; sirve la fuente localmente cuando el proyecto requiera independencia de terceros.

Sustituye el nombre mono, favicon, textos de ejemplo y secciones por contenido pertinente. No incluyas por rutina el selector de orbital/onda/retícula: es un control del laboratorio de demostración. Conserva una pausa accesible si hay movimiento continuo.

## identidad a conservar

- portada integrada: título centrado delante de la animación, misma familia tipográfica y sin cursivas de relleno;
- blanco y negro para lo futurista, espacio amplio, menú discreto y sin divisor decorativo;
- sin etiquetas técnicas ni coordenadas ficticias para decorar;
- onda con deformación local que sigue al cursor, respuesta gradual al scroll y transiciones entre formas cuando sean pertinentes;
- para otras categorías, cambia el mecanismo de movimiento, contenido y paleta según el producto: no clones la onda en todas las páginas.

## fluidez y adaptación

El ejemplo usa un único `requestAnimationFrame`, interpolación exponencial basada en tiempo, geometría precalculada, buffers reutilizados y ocho grupos de dibujo. Reduce partículas y resolución en móvil; evita calcular ondas lejanas al cursor. No impone una pausa de 32 ms entre fotogramas. Estas son decisiones de implementación, no una promesa de fps.

Conserva pausa manual, movimiento reducido y suspensión fuera de vista o con pestaña oculta. Al portarlo a un framework, desconecta observers, listeners y el bucle al desmontar. Comprueba puntero, scroll inverso, cambios rápidos de modo, resize y lectura móvil. Mide en el dispositivo objetivo antes de afirmar mejoras de rendimiento.
