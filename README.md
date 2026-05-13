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

Versión actual: `1.2.26`.

Esta iteración reconstruye la sección de `Ubicación y cobertura` para acercarla al reference image suministrado: copy/contacto/acciones a la izquierda, mapa a la derecha, marcador de marca, tarjeta flotante de cobertura y soporte opcional para Google Maps con estilo personalizado.

## Leaflet map rendering fix

La sección `Ubicación y cobertura` ya no carga Leaflet desde CDN en runtime. Leaflet se empaqueta como dependencia local, se importa su CSS de forma estática y el mapa usa tiles CARTO Light basados en OpenStreetMap sin API key. Esto evita el bug donde los tiles podían aparecer apilados, cargarse uno por uno o quedar desalineados cuando el CSS de Leaflet llegaba tarde o el mapa se inicializaba durante una animación del contenedor.

## Estructura principal

- `src/components/` contiene los componentes Vue reutilizables.
- `src/components/MapSection.vue` controla la sección de ubicación y cobertura.
- `src/components/FaqSection.vue` controla la sección de preguntas frecuentes.
- `src/components/MissionMediaShape.vue` controla la curva visual de la imagen de misión.
- `src/components/MissionBenefitList.vue` controla el panel de beneficios de misión.
- `src/components/ProductImageFrame.vue` compone cada imagen de producto con el fondo de concreto.
- `src/components/IconBubble.vue` centraliza burbujas de iconos reutilizables.
- `src/data/` contiene datos reutilizables para productos, servicios, sectores, ventajas, contacto, misión, delivery y FAQ.
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
VITE_EMAIL=eltrebol.tarimaindustrial@gmail.com
VITE_MAP_LAT=19.2985595
VITE_MAP_LNG=-99.6898324
VITE_GOOGLE_MAPS_LINK=https://maps.app.goo.gl/CaAWkfqQoaVnfPph8
VITE_GOOGLE_MAPS_API_KEY=
VITE_MAP_ZOOM=13
```

Si `VITE_GOOGLE_MAPS_API_KEY` está vacío, la sección usa un fallback visual estilizado. Si se agrega un API key válido, se inicializa Google Maps con estilos personalizados, UI limpia y marcador de marca.

## Assets activos principales

- `public/images/brand/el-trebol-logo.png`
- `public/images/hero/green-industrial-pattern.webp`
- `public/images/hero/pallets-warehouse-stack.webp`
- `public/images/hero/wood-plank-texture.webp`
- `public/images/mission/mission-curved-warehouse.webp`
- `public/images/products/concrete-floor-background.webp`
- `public/images/sections/custom-pallet-solutions.webp`
- `public/images/industries/*.webp`
- `public/images/delivery/delivery-truck-pallets.webp`
- `public/images/faq/faq-warehouse-forklift.webp`
- `public/images/products/tarima-*.webp`

No se almacenan screenshots de referencia dentro del proyecto.

## Contacto centralizado

- WhatsApp: `722 547 2591`
- Llamadas: `722 537 2605`
- Email: `eltrebol.tarimaindustrial@gmail.com`
- Ubicación: `19.2985595,-99.6898324`
- Maps: `https://maps.app.goo.gl/CaAWkfqQoaVnfPph8`

La configuración vive en `src/data/contact.ts` y puede complementarse con variables `.env`.

## Estándares activos

Componentes reutilizables, tokens globales, CSS separado por responsabilidad, texto en HTML/CSS, diseño responsive, sin `!important`, sin hacks por resolución, sin screenshots de referencia en el repo y sin assets fuente innecesarios en producción.

## Iteración v30

Se ajustó el tamaño de iconos rasterizados dentro de botones para evitar que `phone` se vea sobredimensionado en Ubicación y FAQ. También se regeneró el marcador de mapa usando el trébol extraído del spritesheet como símbolo central.

## Mapa de ubicación

`Ubicación y cobertura` usa OpenStreetMap mediante Leaflet, sin API key de Google Maps. El enlace corto de Google Maps se conserva como acción externa para abrir la ubicación en Google Maps.

Variables relevantes:

```bash
VITE_MAP_LAT=19.2985595
VITE_MAP_LNG=-99.6898324
VITE_MAP_ZOOM=13
VITE_GOOGLE_MAPS_LINK=https://maps.app.goo.gl/CaAWkfqQoaVnfPph8
VITE_OPENSTREETMAP_TILE_URL=https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
```


## v1.2.23

- Topbar WhatsApp CTA now uses `public/images/icons/brand/whatsapp-brand-dark.png` instead of an inline SVG path.


## Cambios v35

- `Ubicación y cobertura` ahora es la última sección antes del footer.
- Se removió la antigua sección independiente `¿Listo para cotizar?`.
- El footer fue reconstruido hacia la referencia suministrada, con logo correcto, columnas de navegación, contacto, barra legal verde y solo Facebook como red social.
- El mapa se mantiene con OpenStreetMap/Leaflet, sin API key de Google Maps.
