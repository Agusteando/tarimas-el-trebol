# Project Status — Tarimas El Trébol

Current phase: visual refinement, product-system expansion, and section-by-section reference matching.

Latest implementation pass: v26 FAQ and ventajas desktop fit calibration.

Completed in this pass:

- Fixed the FAQ accordion disappearing bug by removing reveal animation from the interactive FAQ item nodes that Vue patches during state changes.
- Recalibrated `Preguntas frecuentes` for desktop height so the main composition fits inside the initial desktop viewport more reliably.
- Recalibrated `Ventajas competitivas` for desktop height with tighter heading, icon, card, spacing, and CTA sizing.
- Added height-aware desktop rules for shorter browser viewports without changing mobile behavior.
- Preserved the existing reference structure, supplied images, and centralized contact behavior: WhatsApp remains `722 547 2591`; phone calls remain `722 537 2605`.
- Rebuilt successfully with `npm run build`.

Plan status updates:

- Contact behavior is centralized and explicit: WhatsApp and phone-call flows remain separate by default.
- Section foundation: FAQ and ventajas now use compact desktop calibration while preserving component/data/CSS separation.
- Nuestra misión: curved desktop image remains on the supplied warehouse photo.
- Nuestros productos: concrete texture remains active behind transparent tarima images, with non-wrapping WhatsApp CTAs.
- Soluciones personalizadas: desktop reference calibration remains in place.
- Servicios adicionales: full reference structure remains active and height-calibrated for shorter desktop viewports.
- Sectores que atendemos: reference layout remains implemented with extracted WebP scene assets.
- Entrega confiable / Proceso simple: reference layout remains implemented with the supplied truck photo and dedicated CSS.
- Preguntas frecuentes: accordion is fixed and desktop sizing is tightened.
- Ventajas competitivas: desktop sizing is tightened so the full composition is visible sooner.
- Asset cleanup: screenshots are not stored in the project ZIP; `dist` and `node_modules` remain excluded from delivery.

Pending user input remains:

1. Product spreadsheet with all final tarima types, variants, measures, and capacities.
2. Final latitude/longitude for Google Maps.
3. Any real product photos from the client, if available.
4. Final service area/city/cobertura copy.
5. Final product detail behavior after the catalog pass: keep card anchors, add modal, or create individual product detail sections.
