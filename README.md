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

Esta versión recalibra la vista inicial contra la referencia desktop enviada. El ajuste principal no es sólo tipográfico: también corrige escala general, espaciado, iconos, tarjetas superpuestas, header, CTAs y trust bar para que la primera vista tenga la misma densidad visual esperada.

Assets de marca activos:

- `public/images/brand/el-trebol-logo.png`
- `public/images/brand/el-trebol-logo-original.png`

Se agregó una calibración responsive para desktop denso, especialmente útil en el objetivo de 1900 × 1200 a 150%, sin romper el comportamiento móvil.

## Branding aplicado

- Header flotante más compacto con logo real y lockup legible.
- Hero de alta densidad visual basado en la referencia.
- Escala tipográfica contenida y saltos de línea controlados para evitar texto sobredimensionado.
- Iconos, tarjetas superpuestas y CTAs recalibrados.
- Cards de confianza más compactas bajo el hero.
- Paleta blanco / verde / amarillo.
- CTAs amarillos reservados para conversión.
- Imágenes sin texto incrustado; el texto vive en HTML/CSS.

## Assets principales

- `public/images/brand/el-trebol-logo.png`
- `public/images/hero-green-background.webp`
- `public/images/hero-yard.webp`
- `public/references/home-desktop-figma-reference.png`

## Google Maps

Configura coordenadas en `.env`:

```bash
VITE_MAP_LAT=19.000000
VITE_MAP_LNG=-99.000000
```

El mapa queda preparado para renderizarse cuando se agreguen latitud y longitud reales.

## Estándares activos

Componentes reutilizables, tokens globales, CSS limpio, HTML para todo el texto, diseño responsive mobile/desktop, sin `!important`, sin hacks por resolución y sin texto incrustado en imágenes.
