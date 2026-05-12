# Branding — El Trébol Tarimas y Empaques Industriales

## Dirección

Industrial limpio, B2B, operativo y confiable. La página debe comunicar capacidad de abastecimiento, rapidez, calidad y cotización directa para compradores industriales.

## Logo

La iteración actual usa el logo real entregado por el cliente. Los archivos fueron renombrados para mantener el proyecto limpio:

- `public/images/brand/el-trebol-logo.png`
- `public/images/brand/el-trebol-logo-original.png`

En el header se usa como marca visual real dentro de un lockup HTML para mantener legibilidad a escala desktop y mobile. En footer conserva fondo blanco en el área del logo para respetar el arte original.

## Colores

- Blanco base: `#FFFFFF`
- Verde oscuro / autoridad: `#102014`, `#17452A`
- Verde principal: `#2F7D46`
- Verde suave: `#EAF5EC`
- Amarillo CTA: `#F4C542`
- Amarillo suave: `#FFF6D6`
- Madera/acento: `#B87945`
- Texto principal: `#1D2A22`
- Texto secundario: `#5F6D63`

## Tipografía

- Headings: `Manrope`
- Body: `Inter`
- Fallback: system UI stack

## Reglas visuales

Los textos comerciales, teléfonos, labels, badges y CTAs deben renderizarse con HTML/CSS. Las imágenes no deben tener texto incrustado para conservar accesibilidad, SEO, edición limpia y comportamiento responsive.

## Escala de la vista inicial

El header, hero y trust bar están calibrados contra la referencia desktop enviada y ahora usan las imágenes reales de hero aprobadas para fondo y visual principal. La composición debe permitir que el usuario vea la propuesta principal, los CTAs, el visual de tarimas y las cards de confianza sin que el hero se sienta sobredimensionado.

La escala se controla desde CSS responsive con un breakpoint específico para desktop denso; no se usa `zoom`, `transform: scale()` sobre la página ni texto incrustado en imágenes.

## Estándares activos

Componentes reutilizables, tokens globales, CSS limpio, responsive mobile/desktop, assets ordenados, sin `!important`, sin CSS muerto, sin hacks por resolución y sin texto incrustado en imágenes.


## Assets de hero activos

- `public/images/hero/green-industrial-pattern.webp`
- `public/images/hero/pallets-warehouse-stack.webp`

La imagen de fondo aporta el patrón verde industrial; la imagen de tarimas se usa dentro del card rotado del hero. Ninguna contiene texto de marketing.
