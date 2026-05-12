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

Versión actual: `1.2.16`.

Esta iteración corrige el comportamiento del acordeón de `Preguntas frecuentes` y recalibra el tamaño desktop de `Preguntas frecuentes` y `Ventajas competitivas` para que la composición principal sea visible dentro del primer viewport en escritorio con menor desbordamiento vertical.

## Estructura principal

- `src/components/` contiene los componentes Vue reutilizables.
- `src/components/FaqSection.vue` controla la sección de preguntas frecuentes.
- `src/components/MissionMediaShape.vue` controla la curva visual de la imagen de misión.
- `src/components/MissionBenefitList.vue` controla el panel de beneficios de misión.
- `src/components/ProductImageFrame.vue` compone cada imagen de producto con el fondo de concreto.
- `src/components/IconBubble.vue` centraliza burbujas de iconos reutilizables.
- `src/data/` contiene datos reutilizables para productos, servicios, sectores, ventajas, contacto, misión, delivery y FAQ.
- `src/styles/sections/faq.css` contiene la calibración específica de preguntas frecuentes.
- `src/styles/sections/advantages.css` contiene la calibración específica de ventajas competitivas.
- `src/styles/sections/delivery-process.css` contiene la calibración específica de entrega y proceso.
- `src/styles/sections/sectors.css` contiene la calibración específica de sectores.
- `src/styles/sections/solutions-services.css` contiene la calibración específica de soluciones y servicios.
- `src/styles/sections/mission-products.css` contiene la calibración específica de misión, productos y catálogo.

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

La configuración vive en `src/data/contact.ts` y puede complementarse con variables `.env`.

## Estándares activos

Componentes reutilizables, tokens globales, CSS separado por responsabilidad, texto en HTML/CSS, diseño responsive, sin `!important`, sin hacks por resolución, sin screenshots de referencia en el repo y sin assets fuente innecesarios en producción.
