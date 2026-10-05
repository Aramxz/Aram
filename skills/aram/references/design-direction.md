# Dirección visual

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
- **Retícula:** alinea textos, bordes e imágenes con intención. Usa espacios consistentes y cambia de composición en pantallas pequeñas cuando sea necesario.
- **Color:** define superficie, texto, acento y estados semánticos. Comprueba contraste en las combinaciones realmente usadas.
- **Recursos:** selecciona imágenes pertinentes, recortes consistentes y licencias adecuadas. Si falta un recurso central, usa un sustituto honesto y comunícalo.
- **Forma:** radios, bordes y sombras deben apoyar el carácter del sitio, no aplicarse a todos los bloques por costumbre.
- **Contenido:** sustituye afirmaciones vagas por beneficios concretos, evidencia disponible y acciones comprensibles.

Implementa tokens ajustables para color, espaciado, tipografía y movimiento según las convenciones del proyecto. No impongas un framework nuevo para introducirlos.

## Adaptación móvil

Replantea el orden cuando mejore la lectura; preserva un orden DOM comprensible. Evita texto fuera de pantalla, imágenes deformadas y controles que solo se descubren con hover. Las escenas fijas o horizontales pueden convertirse en bloques verticales. Mantén cómodas las áreas táctiles y visibles los estados de foco.
