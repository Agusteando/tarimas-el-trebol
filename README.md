# Tarimas El Trébol — Landing Vue/Vite

Landing page B2B para `tarimaseltrebol.mx`, construida con Vue 3, Vite y TypeScript.

## Objetivo

Presentar a El Trébol / MOAN SA de CV como proveedor industrial de tarimas para empresas, con foco en cotización rápida, productos claros, servicios adicionales y contacto directo por WhatsApp/teléfono.

## Stack

- Vue 3
- Vite
- TypeScript
- CSS modular por tokens globales
- Assets SVG temporales sin texto incrustado

## Comandos

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Configuración

Copia `.env.example` a `.env` y ajusta los datos reales cuando estén disponibles:

```env
VITE_PHONE_PRIMARY=7225372605
VITE_PHONE_SECONDARY=7225472591
VITE_WHATSAPP_NUMBER=527225372605
VITE_EMAIL=eltrebol.tarimaindustrial@gmail.com
VITE_MAP_LAT=
VITE_MAP_LNG=
```

Cuando agregues latitud y longitud, el componente de ubicación renderizará Google Maps automáticamente.

## Branding

La guía inicial está en `BRANDING.md`. El diseño usa blanco, verdes suaves, verde oscuro y amarillo como acento de conversión. Los textos se renderizan en HTML/CSS para mantener SEO, accesibilidad y responsividad.

## Imágenes

Los SVG actuales son placeholders limpios. Para producción, reemplaza los archivos de `public/images/` o actualiza rutas en `src/data/`.
