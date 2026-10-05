# Dirección visual

## minúsculas como preferencia

Redacta el copy original de la interfaz en minúsculas, incluidos títulos, botones y microetiquetas. No conviertas automáticamente contenido de usuarios, código, identificadores o marcas que requieran una grafía exacta. La jerarquía depende de composición, tamaño y peso, no de convertir etiquetas en mayúsculas. Usa [las referencias elegidas](inspiration.md) según la categoría del encargo.

## Elegir una dirección coherente

Si ya existe marca, extrae sus reglas de los componentes y recursos reales. Si no existe, elige una dirección provisional según el producto:

| Dirección | Composición y recursos | Movimiento |
| --- | --- | --- |
| Editorial premium | Escala tipográfica, retícula precisa, fotografía o producto protagonista, paleta contenida | Entradas breves y suaves; sin rebote por defecto |
| Tecnología expresiva | Información bien agrupada, contraste marcado, visualizaciones o demostraciones reales | Transiciones de estado y secuencias que expliquen funcionamiento |
| Estudio creativo | Composiciones asimétricas, tipografía con carácter, proyectos y autoría visibles | Un gesto distintivo por escena, con lectura y navegación estables |

Estas direcciones son puntos de partida; no vincules “premium” obligatoriamente a negro y dorado ni “tecnología” a gradientes morados.

## Decisiones que deben reflejarse en el resultado

- **Jerarquía:** distingue título, argumento, evidencia y acción; permite que una pieza domine la escena.
- **Tipografía:** establece roles y escala fluida. Valida los saltos de línea con el contenido real y zoom. No dependas de saltos manuales que rompan móvil.
- **Títulos:** centra por defecto el título principal y su bloque en el eje horizontal de la portada; limita el ancho para equilibrar sus líneas y comprueba escritorio y móvil. No fuerces centrado vertical de toda la pantalla ni extiendas esta preferencia a párrafos largos, tablas o formularios. Usa una familia consistente y estilo recto dentro de cada título. Evita el cambio de sans a serif/cursiva en una palabra por rutina. Reserva cursivas para énfasis editorial puntual o una petición explícita.
- **Retícula:** alinea textos, bordes e imágenes con intención. Usa espacios consistentes y cambia de composición en pantallas pequeñas cuando sea necesario.
- **Color:** evita la combinación automática de lavanda, rosa empolvado, menta y melocotón pastel. Elige neutros definidos y uno o dos acentos con carácter ligados al producto, sin neón ni saturación indiscriminada. Los tonos claros pueden ser superficies de apoyo, no una paleta genérica de relleno. Respeta colores de marca explícitos. Define superficie, texto, acento y estados semánticos. Comprueba contraste en las combinaciones realmente usadas.
- **Recursos:** selecciona imágenes pertinentes, recortes consistentes y licencias adecuadas. Si falta un recurso central, usa un sustituto honesto y comunícalo.
- **Forma:** radios, bordes y sombras deben apoyar el carácter del sitio, no aplicarse a todos los bloques por costumbre.
- **Contenido:** sustituye afirmaciones vagas por beneficios concretos, evidencia disponible y acciones comprensibles.

Implementa tokens ajustables para color, espaciado, tipografía y movimiento según las convenciones del proyecto. No impongas un framework nuevo para introducirlos.

## Adaptación móvil

Replantea el orden cuando mejore la lectura; preserva un orden DOM comprensible. Evita texto fuera de pantalla, imágenes deformadas y controles que solo se descubren con hover. Las escenas fijas o horizontales pueden convertirse en bloques verticales. Mantén cómodas las áreas táctiles y visibles los estados de foco.

## Acabado visual sin efectos de relleno

La preferencia de Aram es una dirección de arte cuidada y tipografía nítida. Evita tipografía neón, texto luminoso, contornos fluorescentes y halos de color como recurso decorativo. Un acento intenso, como el naranja del ejemplo Aram Studio, puede aportar carácter sin convertirse en un efecto neón.

No uses como atajo visual el conjunto de fondo oscuro, gradientes violeta/cian, orbes luminosos y tarjetas translúcidas repetidas. Evita también sombras profundas en cada bloque, bordes brillantes, emojis como identidad de marca y animaciones permanentes que compitan con la lectura. Un efecto aislado no determina la calidad: el problema es añadirlo sin propósito o repetir una estética ajena al contenido.

Sustituye esos recursos por decisiones visibles: una familia tipográfica adecuada, pesos y tamaños bien relacionados, espacio preciso, alineaciones coherentes, fotografía o arte pertinente y contraste de escala. No añadas efectos para compensar una composición débil.

Antes de entregar, revisa: ¿el título se lee con claridad?, ¿cada color tiene una función?, ¿las secciones expresan el contenido real?, ¿la página conserva identidad sin resplandores ni movimiento? Corrige las causas concretas antes de añadir decoración. Si el usuario pide explícitamente otra dirección, respeta ese encargo y mantén legibilidad y coherencia.

## Fondos por contexto

**Portada animada:** integra título y animación en una misma escena, con el título centrado en primer plano. El fondo animado ocupa esa misma portada; no lo presentes como un bloque separado debajo del encabezado. Reserva una zona visual tranquila detrás del texto, controla densidad y contraste y evita que canvas o capas decorativas intercepten los controles. En móvil y movimiento reducido conserva esa composición.

**Futurista:** prioriza blanco y negro como base dominante, con grises para superficies, bordes y profundidad. Tanto un fondo negro con texto blanco como el inverso son válidos. Expresa el carácter futurista mediante contraste, geometría y movimiento, sin depender de cian, violeta, neón ni pasteles. Usa acentos mínimos solo para estados o acciones que los necesiten, o por dirección explícita de marca.

**Tecnología:** prioriza una capa abstracta de partículas o nodos conectados, inspirada visualmente en nanotecnología, sin presentarla como una simulación científica. Usa movimiento lento, opacidad baja y un área tranquila detrás de textos y controles. La profundidad puede venir del tamaño, la densidad y el desplazamiento, sin resplandores. El fondo puede ser claro u oscuro según el producto; no impongas una estética espacial a todas las aplicaciones.

**Redes sociales:** da más presencia al color en el fondo general, áreas de navegación, comunidad y superficies secundarias. Elige una paleta pequeña con roles definidos y conserva superficies de lectura con contraste suficiente. Evita que todos los elementos sean blancos sobre gris, pero no asignes un color arbitrario a cada tarjeta. Mantén coherencia entre escritorio y móvil.

**Otros sitios:** conserva su identidad propia. No extiendas partículas tecnológicas ni fondos sociales multicolor a categorías sin relación. Las instrucciones explícitas del proyecto prevalecen.
