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

## Branding aplicado

La iteración actual aplica la referencia desktop inicial con:

- header flotante tipo Figma,
- hero de alta densidad visual,
- escala tipográfica reducida para evitar el problema de tamaño excesivo,
- cards de confianza debajo del hero,
- paleta blanco / verde / amarillo,
- CTAs amarillos para conversión,
- imágenes sin texto incrustado.

## Assets nuevos

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
