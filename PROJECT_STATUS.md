# Project Status — Tarimas El Trébol

Current phase: visual refinement, product-system expansion, and section-by-section reference matching.

Latest implementation pass: v20 Servicios adicionales desktop scaling correction.

Completed in this pass:

- Corrected the `Servicios adicionales` desktop scaling issue where the reference composition became too tall and overflowed shorter browser viewports.
- Added a height-aware desktop calibration for the services section so the hero, CTA row, five service cards, operational image, proof panel, and bottom contact strip remain visible together on shorter desktop views.
- Reduced only the affected desktop vertical rhythm: service card height, image/proof-panel height, margins, CTA height, footer strip, and icon sizes are now calibrated as one system instead of isolated patches.
- Kept the v19 service reference structure intact, including the supplied truck/forklift image and the corrected WhatsApp icon.
- Preserved mobile/tablet behavior below the desktop breakpoint.
- Kept screenshots/reference images out of the project ZIP; only production assets used by the site are included.
- Rebuilt successfully with `npm run build`.

Plan status updates:

- Section foundation: service content remains data-driven and rendered through the existing reusable icon system.
- Nuestra misión: curved desktop image remains on the supplied warehouse photo.
- Nuestros productos: concrete texture remains active behind transparent tarima images, with non-wrapping WhatsApp CTAs.
- Soluciones personalizadas: desktop reference calibration remains in place.
- Servicios adicionales: full reference structure is active and now scales correctly for shorter desktop viewports.
- Asset cleanup: screenshots are not stored in the project ZIP; `dist` and `node_modules` remain excluded from delivery.

Pending user input remains:

1. Product spreadsheet with all final tarima types, variants, measures, and capacities.
2. Final latitude/longitude for Google Maps.
3. Confirmation of final WhatsApp number.
4. Confirmation of whether both phone numbers should remain visible.
5. Any real product photos from the client, if available.
6. Final service area/city/cobertura copy.
7. Final product detail behavior after the catalog pass: keep card anchors, add modal, or create individual product detail sections.
