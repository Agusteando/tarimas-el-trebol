# Tarimas El Trébol — Vue/Vite Landing

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

## Estado actual

Versión actual: `1.2.27`.

Esta iteración agrega una sección de galería usando las imágenes reales suministradas por el cliente. También reemplaza las imágenes de `Nuestra misión` y `Soluciones a la medida` con fotografías de esa misma galería, manteniendo la estructura limpia por componente, datos y CSS de sección.

## Estructura principal

- `src/components/` contiene los componentes Vue reutilizables.
- `src/components/GallerySection.vue` controla la nueva galería de operación real.
- `src/components/MapSection.vue` controla la sección de ubicación y cobertura.
- `src/components/FaqSection.vue` controla la sección de preguntas frecuentes.
- `src/components/MissionMediaShape.vue` controla la curva visual de la imagen de misión.
- `src/components/MissionBenefitList.vue` controla el panel de beneficios de misión.
- `src/components/ProductImageFrame.vue` compone cada imagen de producto con el fondo de concreto.
- `src/components/IconBubble.vue` centraliza burbujas de iconos reutilizables.
- `src/data/` contiene datos reutilizables para productos, servicios, sectores, ventajas, contacto, misión, delivery, FAQ y galería.
- `src/styles/sections/gallery.css` contiene la calibración específica de galería.
- `src/styles/sections/location.css` contiene la calibración específica de ubicación y cobertura.
- `src/styles/sections/faq.css` contiene la calibración específica de preguntas frecuentes.
- `src/styles/sections/advantages.css` contiene la calibración específica de ventajas competitivas.
- `src/styles/sections/delivery-process.css` contiene la calibración específica de entrega y proceso.
- `src/styles/sections/sectors.css` contiene la calibración específica de sectores.
- `src/styles/sections/solutions-services.css` contiene la calibración específica de soluciones y servicios.
- `src/styles/sections/mission-products.css` contiene la calibración específica de misión, productos y catálogo.

## Configuración `.env`

El ZIP incluye `.env` y `.env.example` con las coordenadas reales suministradas:

```bash
VITE_WHATSAPP_NUMBER=527225472591
VITE_WHATSAPP_PHONE=7225472591
VITE_PHONE_CALL_NUMBER=7225372605
VITE_EMAIL=ventas@eltreboltarimas.com.mx
VITE_ADDRESS_LINE_1=Parque Industrial Toluca 2000
VITE_ADDRESS_LINE_2=Toluca, Estado de México, 50200
VITE_FACEBOOK_URL=https://www.facebook.com/
VITE_MAP_LAT=19.2985595
VITE_MAP_LNG=-99.6898324
VITE_MAP_ZOOM=13
VITE_GOOGLE_MAPS_LINK=https://maps.app.goo.gl/CaAWkfqQoaVnfPph8
```

## Mapa de ubicación

`Ubicación y cobertura` usa un embed de OpenStreetMap sin API key. El enlace corto de Google Maps se conserva como acción externa para abrir la ubicación exacta en Google Maps.

## Assets activos principales

- `public/images/brand/el-trebol-logo.png`
- `public/images/hero/green-industrial-pattern.webp`
- `public/images/hero/pallets-warehouse-stack.webp`
- `public/images/hero/wood-plank-texture.webp`
- `public/images/gallery/*.webp`
- `public/images/products/concrete-floor-background.webp`
- `public/images/industries/*.webp`
- `public/images/delivery/delivery-truck-pallets.webp`
- `public/images/faq/faq-warehouse-forklift.webp`
- `public/images/products/tarima-*.webp`

No se almacenan screenshots de referencia dentro del proyecto.

## Contacto centralizado

- WhatsApp: `722 547 2591`
- Llamadas: `722 537 2605`
- Email: `ventas@eltreboltarimas.com.mx`
- Ubicación: `19.2985595,-99.6898324`
- Maps: `https://maps.app.goo.gl/CaAWkfqQoaVnfPph8`

La configuración vive en `src/data/contact.ts` y puede complementarse con variables `.env`.

## Estándares activos

Componentes reutilizables, tokens globales, CSS separado por responsabilidad, texto en HTML/CSS, diseño responsive, sin `!important`, sin hacks por resolución, sin screenshots de referencia en el repo y sin assets fuente innecesarios en producción.
