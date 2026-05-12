# Project Status — Tarimas El Trébol

Current phase: visual refinement, product-system expansion, and section-by-section reference matching.

Latest implementation pass: v25 ventajas competitivas reference rebuild.

Completed in this pass:

- Rebuilt the `Ventajas competitivas` section to match the supplied reference more closely.
- Replaced the older dark-background advantage block with a clean light layout: left-aligned heading, five-column value row, and lower CTA strip.
- Updated `src/data/advantages.ts` with the five final value propositions and copy aligned to the provided mockup.
- Reworked `src/components/AdvantagesSection.vue` for a dedicated structure instead of the previous generic grid.
- Added `src/styles/sections/advantages.css` to keep the section styling isolated and easier to maintain.
- Added a reusable `handshake` icon to `IconSymbol.vue` and extended `IconBubble.vue` / base icon utilities with `xl` sizing.
- Preserved centralized contact behavior: WhatsApp remains `722 547 2591`; phone calls remain `722 537 2605`.
- Rebuilt successfully with `npm run build`.

Plan status updates:

- Contact behavior is centralized and explicit: WhatsApp and phone-call flows remain separate by default.
- Section foundation: ventajas competitivas now follows the same component/data/CSS separation pattern used in products, mission, solutions, services, sectors, delivery, and FAQ.
- Nuestra misión: curved desktop image remains on the supplied warehouse photo.
- Nuestros productos: concrete texture remains active behind transparent tarima images, with non-wrapping WhatsApp CTAs.
- Soluciones personalizadas: desktop reference calibration remains in place.
- Servicios adicionales: full reference structure remains active and height-calibrated for shorter desktop viewports.
- Sectores que atendemos: reference layout remains implemented with extracted WebP scene assets.
- Entrega confiable / Proceso simple: reference layout remains implemented with the supplied truck photo and dedicated CSS.
- Preguntas frecuentes: reference layout remains implemented with accordion behavior, supplied image, and CTA strip.
- Ventajas competitivas: reference layout is now implemented with five desktop value columns and relationship CTA block.
- Asset cleanup: screenshots are not stored in the project ZIP; `dist` and `node_modules` remain excluded from delivery.

Pending user input remains:

1. Product spreadsheet with all final tarima types, variants, measures, and capacities.
2. Final latitude/longitude for Google Maps.
3. Any real product photos from the client, if available.
4. Final service area/city/cobertura copy.
5. Final product detail behavior after the catalog pass: keep card anchors, add modal, or create individual product detail sections.
