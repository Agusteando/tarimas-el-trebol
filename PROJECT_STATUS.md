# Project Status — Tarimas El Trébol

Current phase: visual refinement, product-system expansion, and section-by-section reference matching.

Latest implementation pass: v27 ubicación y cobertura reference rebuild.

Completed in this pass:

- Rebuilt `Ubicación y cobertura` toward the supplied reference: left copy/contact/actions, right map card, custom marker, and floating coverage panel.
- Added the production coordinates in `.env`, `.env.example`, and centralized contact config: `19.2985595,-99.6898324`.
- Added the supplied Google Maps link to centralized contact config: `https://maps.app.goo.gl/CaAWkfqQoaVnfPph8`.
- Added optional `VITE_GOOGLE_MAPS_API_KEY` support. When a key is present, the section initializes a styled Google Map with custom desaturated/green industrial styling and a branded marker.
- Added a polished no-key fallback map visual so the section still matches the reference direction without requiring an API key during local review.
- Added `src/styles/sections/location.css` and removed retired `map-section` styles from `base.css` to keep responsibilities cleaner.
- Added missing reusable icons for `mail`, `building`, `globe`, `person`, and `people` in `IconSymbol.vue`.
- Reordered the home flow so `Ubicación y cobertura` transitions into `Ventajas competitivas`, matching the new reference preview.
- Preserved centralized contact behavior: WhatsApp remains `722 547 2591`; phone calls remain `722 537 2605`.
- Rebuilt successfully with `npm run build`.

Plan status updates:

- Contact behavior is centralized and explicit: WhatsApp and phone-call flows remain separate by default.
- Location behavior is now centralized and environment-driven through `src/data/contact.ts` and `.env`.
- Section foundation: ubicación now follows the same component/data/CSS separation pattern used in products, mission, solutions, services, sectors, delivery, FAQ, and ventajas.
- Nuestra misión: curved desktop image remains on the supplied warehouse photo.
- Nuestros productos: concrete texture remains active behind transparent tarima images, with non-wrapping WhatsApp CTAs.
- Soluciones personalizadas: desktop reference calibration remains in place.
- Servicios adicionales: full reference structure remains active and height-calibrated for shorter desktop viewports.
- Sectores que atendemos: reference layout remains implemented with extracted WebP scene assets.
- Entrega confiable / Proceso simple: reference layout remains implemented with the supplied truck photo and dedicated CSS.
- Preguntas frecuentes: accordion fix and desktop sizing remain active.
- Ventajas competitivas: desktop sizing remains tightened and now follows the location section in the home flow.
- Asset cleanup: screenshots are not stored in the project ZIP; `dist` and `node_modules` remain excluded from delivery.

Pending user input remains:

1. Product spreadsheet with all final tarima types, variants, measures, and capacities.
2. Google Maps API key if the production site should render the fully styled live Google Map instead of the built-in styled fallback.
3. Any real product photos from the client, if available.
4. Final service area/city/cobertura copy.
5. Final product detail behavior after the catalog pass: keep card anchors, add modal, or create individual product detail sections.
