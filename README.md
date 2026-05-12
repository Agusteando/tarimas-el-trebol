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

Versión actual: `1.2.8`.

Esta iteración actualiza la imagen curva de `Nuestra misión` con la nueva foto suministrada y recalibra `Soluciones a la medida` para acercarse mucho más al layout de referencia en desktop: escala tipográfica, proporciones del grid, chips, CTAs, bloque de pruebas, tarjeta flotante y transición con `Servicios adicionales`.

## Estructura principal

- `src/components/` contiene los componentes Vue reutilizables.
- `src/components/MissionMediaShape.vue` controla la curva visual de la imagen de misión.
- `src/components/MissionBenefitList.vue` controla el panel de beneficios de misión.
- `src/components/ProductImageFrame.vue` compone cada imagen de producto con el fondo de concreto.
- `src/components/IconBubble.vue` centraliza burbujas de iconos reutilizables.
- `src/styles/sections/solutions-services.css` contiene la calibración específica de soluciones personalizadas y servicios adicionales.
- `src/data/` contiene datos reutilizables para productos, servicios, sectores, ventajas, contacto y misión.
- `src/styles/tokens.css` contiene tokens globales.
- `src/styles/base.css` contiene estilos base y secciones generales.
- `src/styles/sections/mission-products.css` contiene la calibración específica de misión, productos y catálogo.

## Assets activos principales

- `public/images/brand/el-trebol-logo.png`
- `public/images/hero/green-industrial-pattern.webp`
- `public/images/hero/pallets-warehouse-stack.webp`
- `public/images/hero/wood-plank-texture.webp`
- `public/images/mission/mission-curved-warehouse.webp`
- `public/images/products/concrete-floor-background.webp`
- `public/images/sections/custom-pallet-solutions.webp`
- `public/images/products/tarima-*.webp`

No se almacenan screenshots de referencia dentro del proyecto.

## Productos

La página `/productos` muestra el catálogo completo con 12 tipos de tarima:

- Barrote
- Tacón
- Tipo Cheep
- Reciclada
- Nueva Estándar
- Personalizada
- Reforzada para Carga Pesada
- Doble Vista
- Exportación
- Ligera Económica
- Industrial Cerrada
- Perimetral

El home conserva tres productos destacados y el botón `Ver todas las tarimas` navega al catálogo completo.

## Google Maps

Configura coordenadas en `.env`:

```bash
VITE_MAP_LAT=19.000000
VITE_MAP_LNG=-99.000000
```

El mapa queda preparado para renderizarse cuando se agreguen latitud y longitud reales.

## Estándares activos

Componentes reutilizables, tokens globales, CSS separado por responsabilidad, texto en HTML/CSS, diseño responsive, sin `!important`, sin hacks por resolución, sin screenshots de referencia en el repo y sin assets fuente innecesarios en producción.
