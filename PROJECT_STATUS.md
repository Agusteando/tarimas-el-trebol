# Project Status — Tarimas El Trébol

Current phase: visual refinement, product-system expansion, and section-by-section reference matching.

Latest implementation pass: v30 phone-icon sizing and trébol marker refinement.

Completed in this pass:

- Fixed oversized raster icons inside CTA buttons by standardizing `.button .icon-symbol` dimensions and disabling sprite scaling inside buttons.
- Corrected the phone icon sizing in `Ubicación y cobertura` and `Preguntas frecuentes` so it matches the visual weight of the WhatsApp icon.
- Rebuilt `map-marker-trebol.png` using the extracted spritesheet clover as the center mark, with a cleaner green pin body and white seal.
- Updated the Google Maps marker dimensions and anchor to match the regenerated marker asset.

- Re-extracted and normalized all 25 icons from the transparent spritesheet using alpha-based trimming, hidden-guide-pixel cleanup, and final visible-bounds centering.
- Replaced the previous imperfect sprite outputs with consistently centered 128×128 PNG icons under `public/images/icons/sprite/`.
- Tuned sprite rendering in the shared `.icon-symbol--sprite` path so icons read closer to the original SVG scale inside bubbles, chips, cards, and buttons.
- Added a dedicated branded map marker asset at `public/images/icons/map-marker-trebol.png` with a clear trebol mark.
- Updated `MapSection.vue` so both Google Maps and the fallback map use the branded trebol marker asset instead of a CSS-drawn marker.
- Recalibrated `Ubicación y cobertura` with desktop `svh`-based map height and padding so the section fits better inside the first viewport while preserving the reference layout.
- Kept the supplied map coordinates and Google Maps link in `.env` / contact config.
- Rebuilt successfully with `npm run build`.

Plan status updates:

- Contact behavior is centralized and explicit: WhatsApp and phone-call flows remain separate by default.
- Section foundation: mission, products, solutions, services, sectors, delivery/process, FAQ, location, and ventajas all remain componentized with dedicated data and section CSS where needed.
- Ubicación y cobertura now has the strongest viewport-fit calibration and a trebol marker that works in both real Google Maps and the no-key fallback.
- Shared icon system is asset-driven for all icons available in the supplied spritesheet, with minimal SVG fallback only where the sheet lacks an equivalent.
- Asset cleanup remains intact: screenshots are not stored in the project ZIP; `dist` and `node_modules` remain excluded from delivery.

Pending user input remains:

1. Product spreadsheet with all final tarima types, variants, measures, and capacities.
2. Final latitude/longitude for Google Maps if coordinates change in the future.
3. Any real product photos from the client, if available.
4. Final service area/city/cobertura copy.
5. Final product detail behavior after the catalog pass: keep card anchors, add modal, or create individual product detail sections.
