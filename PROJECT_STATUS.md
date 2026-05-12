# Project Status — Tarimas El Trébol

Current phase: visual refinement, product-system expansion, and section-by-section reference matching.

Latest implementation pass: v32 OpenStreetMap/Leaflet location rebuild.

Completed in this pass:

- Removed the Google Maps JavaScript API dependency from `Ubicación y cobertura`.
- Implemented an API-key-free OpenStreetMap map through Leaflet loaded at runtime from CDN.
- Kept the supplied Google Maps short link as a clear `Abrir en Google Maps` action instead of using Google Maps JS.
- Preserved the custom trébol map marker asset and wired it into the Leaflet marker.
- Added OpenStreetMap tile configuration to centralized contact config and `.env` / `.env.example`.
- Rebalanced the `Ubicación y cobertura` desktop grid so the section uses horizontal space more correctly and centers the composition.
- Tightened height-aware desktop rules so the location section fits better within the first viewport on shorter desktop browser windows.
- Kept the styled local fallback map for cases where the Leaflet CDN or OSM tiles fail to load.
- Rebuilt successfully with `npm run build`.

Plan status updates:

- Contact behavior remains centralized and explicit: WhatsApp is `722 547 2591`; phone calls are `722 537 2605`.
- `Ubicación y cobertura` now uses OpenStreetMap/Leaflet and does not need a Google Maps API key.
- The Google Maps link remains available as an outbound link for navigation.
- Shared icon system remains sprite-driven where icons exist in the supplied icon sheet.
- Asset cleanup remains intact: screenshots are not stored in the project ZIP; `dist` and `node_modules` remain excluded from delivery.

Pending user input remains:

1. Product spreadsheet with all final tarima types, variants, measures, and capacities.
2. Any real product photos from the client, if available.
3. Final service area/city/cobertura copy.
4. Final product detail behavior after the catalog pass: keep card anchors, add modal, or create individual product detail sections.
