# Project Status — Tarimas El Trébol

Current phase: visual refinement, product-system expansion, and section-by-section reference matching.

Latest implementation pass: v31 ubicación viewport fitting and Google Maps fallback guard.


Completed in this pass:

- Tightened `Ubicación y cobertura` desktop height calibration for shorter browser viewports so the section fits within the initial visible page area.
- Reduced the short-viewport vertical stack proportionally: heading scale, lead spacing, contact cards, chips, buttons, map height, coverage card, and marker size.
- Added a Google Maps auth/load fallback guard using `gm_authFailure`, script error handling, and a load timeout so invalid or misconfigured API keys fall back to the styled local map instead of leaving the Google error modal over the section.
- Preserved the current trébol marker asset and centralized contact behavior.
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
