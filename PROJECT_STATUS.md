# Project Status — Tarimas El Trébol

Current phase: visual refinement, product-system expansion, and section-by-section reference matching.

Latest implementation pass: v28 extracted sprite icon integration.

Completed in this pass:

- Extracted and tightly cropped 25 icons from the user-provided transparent spritesheet.
- Added the extracted icon assets under `public/images/icons/sprite/` for direct reuse throughout the app.
- Added `src/data/iconSprites.ts` as the centralized sprite-icon registry.
- Reworked `src/components/IconSymbol.vue` so it now resolves raster sprite assets first and only falls back to SVG for missing icons.
- Replaced the path-based implementation for the available shared icons with the extracted sprite versions across the app automatically through the centralized icon component.
- Added alias coverage so `people` resolves to the extracted `users` sprite.
- Preserved vector fallbacks for icons not present in the sprite sheet: `whatsapp`, `mail`, `building`, `globe`, `person`, `truck`, and `weight`.
- Rebuilt successfully with `npm run build`.

Plan status updates:

- Contact behavior is centralized and explicit: WhatsApp and phone-call flows remain separate by default.
- Section foundation: mission, products, solutions, services, sectors, delivery/process, FAQ, location, and ventajas all remain componentized with dedicated data and section CSS where needed.
- Ubicación y cobertura remains wired to the supplied map link and coordinates via `.env`.
- Shared icon system is now partially asset-driven instead of fully path-driven, using the supplied visual language as the primary source.
- Asset cleanup remains intact: screenshots are not stored in the project ZIP; `dist` and `node_modules` remain excluded from delivery.

Pending user input remains:

1. Product spreadsheet with all final tarima types, variants, measures, and capacities.
2. Final latitude/longitude for Google Maps if coordinates change in the future.
3. Any real product photos from the client, if available.
4. Final service area/city/cobertura copy.
5. Final product detail behavior after the catalog pass: keep card anchors, add modal, or create individual product detail sections.
