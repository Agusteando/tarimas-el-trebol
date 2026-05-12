# Project Status — Tarimas El Trébol

Current phase: visual refinement, product-system expansion, and section-by-section reference matching.

Latest implementation pass: v24 FAQ reference rebuild.

Completed in this pass:

- Added the supplied FAQ warehouse/forklift photograph as optimized WebP under `public/images/faq/`.
- Replaced the old placeholder gallery section with a dedicated FAQ section that matches the supplied reference direction: left headline and accordion, right image, and bottom CTA strip.
- Added `src/data/faq.ts` to keep question/answer content separated from layout logic.
- Added `src/components/FaqSection.vue` and `src/styles/sections/faq.css` for cleaner separation of concerns.
- Added a reusable `chat` symbol to `IconSymbol.vue` for the FAQ CTA.
- Removed the retired placeholder `GallerySection.vue` and its unused SVG assets to keep the project lightweight.
- Preserved the centralized contact behavior: WhatsApp remains `722 547 2591`; phone calls remain `722 537 2605`.
- Rebuilt successfully with `npm run build`.

Plan status updates:

- Contact behavior is centralized and explicit: WhatsApp and phone-call flows remain separate by default.
- Section foundation: FAQ now follows the same component/data/CSS separation pattern used in products, mission, solutions, services, sectors, and delivery.
- Nuestra misión: curved desktop image remains on the supplied warehouse photo.
- Nuestros productos: concrete texture remains active behind transparent tarima images, with non-wrapping WhatsApp CTAs.
- Soluciones personalizadas: desktop reference calibration remains in place.
- Servicios adicionales: full reference structure remains active and height-calibrated for shorter desktop viewports.
- Sectores que atendemos: reference layout remains implemented with extracted WebP scene assets.
- Entrega confiable / Proceso simple: reference layout remains implemented with the supplied truck photo and dedicated CSS.
- Preguntas frecuentes: reference layout is now implemented with accordion behavior, supplied image, and CTA strip.
- Asset cleanup: screenshots are not stored in the project ZIP; `dist` and `node_modules` remain excluded from delivery.

Pending user input remains:

1. Product spreadsheet with all final tarima types, variants, measures, and capacities.
2. Final latitude/longitude for Google Maps.
3. Any real product photos from the client, if available.
4. Final service area/city/cobertura copy.
5. Final product detail behavior after the catalog pass: keep card anchors, add modal, or create individual product detail sections.
