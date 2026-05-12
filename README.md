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
