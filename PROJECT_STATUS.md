# Project Status — Tarimas El Trébol

Current phase: visual refinement, product-system expansion, and section-by-section reference matching.

Latest implementation pass: v22 sectores reference rebuild and 3x2 scene extraction.

Completed in this pass:

- Extracted the six supplied sector scenes from the 3x2 source image using Python projection-based masking against the checker background.
- Added optimized WebP sector assets under `public/images/industries/`.
- Rebuilt `Sectores que atendemos` toward the supplied Figma reference: centered heading, 3x2 card grid, image-first cards, soft icon bubbles, and the three-column proof strip.
- Added `IndustryCard.vue` and `IndustryProofStrip.vue` so the section stays data-driven and easier to maintain.
- Expanded `IconSymbol.vue` with the required sector/proof icons: food, shovel, ship, users, gear, and clover.
- Moved the sector-specific styling into `src/styles/sections/sectors.css` and removed the retired overlay-card industry CSS from `base.css`.
- Removed unused legacy sector SVG placeholders from `public/images/`.
- Preserved the v21 contact-number split: WhatsApp remains `722 547 2591`; phone calls remain `722 537 2605`.
- Rebuilt successfully with `npm run build`.

Plan status updates:

- Contact behavior is centralized and explicit: WhatsApp and phone-call flows remain separate by default.
- Section foundation: sectors now follows the same component/data/CSS separation pattern used in products, mission, solutions, and services.
- Nuestra misión: curved desktop image remains on the supplied warehouse photo.
- Nuestros productos: concrete texture remains active behind transparent tarima images, with non-wrapping WhatsApp CTAs.
- Soluciones personalizadas: desktop reference calibration remains in place.
- Servicios adicionales: full reference structure remains active and height-calibrated for shorter desktop viewports.
- Sectores que atendemos: reference layout is implemented with extracted WebP scene assets and cleaned legacy CSS/assets.
- Asset cleanup: screenshots are not stored in the project ZIP; `dist` and `node_modules` remain excluded from delivery.

Pending user input remains:

1. Product spreadsheet with all final tarima types, variants, measures, and capacities.
2. Final latitude/longitude for Google Maps.
3. Any real product photos from the client, if available.
4. Final service area/city/cobertura copy.
5. Final product detail behavior after the catalog pass: keep card anchors, add modal, or create individual product detail sections.
