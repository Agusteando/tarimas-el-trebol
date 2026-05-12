# Tarimas El Trébol — Landing Vue/Vite

Landing page para `tarimaseltrebol.mx`, construida con Vue 3, Vite y TypeScript.

## Instalación

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

La última validación de esta iteración compiló correctamente con `npm run build`.

## Iteración actual

Esta versión recalibra el hero contra la referencia desktop para preservar la composición visual en tamaños cercanos al objetivo, especialmente el bloque de H1. El ajuste fija las líneas del título con spans semánticos, aumenta el ancho útil del copy, suaviza el peso tipográfico y mantiene la proporción del visual, proof card, header, CTAs y trust bar sin usar zoom ni transformaciones de escala sobre la página.

Assets de marca activos:

- `public/images/brand/el-trebol-logo.png`
- `public/images/brand/el-trebol-logo-original.png`

Se agregó una calibración responsive para desktop denso, especialmente útil en el objetivo de 1900 × 1200 a 150%, sin romper el comportamiento móvil.

## Branding aplicado

- Header flotante más compacto con logo real y lockup legible.
- Hero de alta densidad visual basado en la referencia.
- Tipografía más cercana a la referencia, usando Manrope para headings con peso visual menos agresivo que Sora.
- Iconos, tarjetas superpuestas y CTAs recalibrados.
- Cards de confianza calibradas bajo el hero para conservar densidad y ritmo visual.
- Sección Quiénes somos rediseñada con visual real, tarjeta flotante e información escaneable.
- Nueva sección de misión con fondo verde suave, card visual y puntos de valor.
- Paleta blanco / verde / amarillo.
- CTAs amarillos reservados para conversión.
- Imágenes sin texto incrustado; el texto vive en HTML/CSS.

## Assets principales

- `public/images/brand/el-trebol-logo.png`
- `public/images/hero/green-industrial-pattern.webp`
- `public/images/hero/pallets-warehouse-stack.webp`
- `public/references/home-desktop-figma-reference.png`
- `public/references/target-reference-density.png`

## Google Maps

Configura coordenadas en `.env`:

```bash
VITE_MAP_LAT=19.000000
VITE_MAP_LNG=-99.000000
```

El mapa queda preparado para renderizarse cuando se agreguen latitud y longitud reales.

## Estándares activos

Componentes reutilizables, tokens globales, CSS limpio, HTML para todo el texto, diseño responsive mobile/desktop, sin `!important`, sin hacks por resolución y sin texto incrustado en imágenes.

## v9 update

This update focuses on the mission and products section. It uses the provided product image sheet, crops product assets into organized files, adds a reusable `ProductCard.vue`, and aligns the layout closer to the supplied Figma/reference screenshot.

Validation:

```bash
npm run build
```

Status: build passes.

## Iteration v10 notes

This pass identifies `public/references/hero-main-target-reference.png` as the target reference for the first main desktop section. The hero now uses the supplied wood plank texture behind the realistic pallet image to reproduce the layered right-side treatment from the reference without embedding marketing text in imagery.

Updated hero assets:

- `public/images/hero/green-industrial-pattern.webp`
- `public/images/hero/pallets-warehouse-stack.webp`
- `public/images/hero/wood-plank-texture.webp`
- `public/images/hero/wood-plank-texture-source.png`
- `public/references/hero-main-target-reference.png`

Implementation standard remains: reusable Vue components, global design tokens, clean CSS, organized assets, responsive desktop/mobile behavior, no `!important`, no page-wide scale hacks, and all headings, CTAs, badges, phones, and labels rendered in HTML/CSS.
## Iteration v11 notes

This pass centers the SVG icons inside their visual containers in `Nuestra misión` and `Nuestros productos`. The shared `IconSymbol` base style is now neutral, so container spacing no longer comes from a global icon margin. The mission benefit bubbles and product CTA/footer icons now control their own sizing and alignment directly.

Product-section cleanup in this pass:

- Added explicit `whatsapp` and `arrow` symbols to `IconSymbol.vue` so product CTAs render the intended icons instead of falling back to the person glyph.
- Removed obsolete product-card subselectors from the old card structure to avoid stale CSS affecting the current showcase card markup.
- Preserved the roadmap direction for mission/products reference matching while keeping all labels, CTAs, product names, and badges as HTML/CSS.

Validation:

```bash
npm run build
```

Status: build passes.

