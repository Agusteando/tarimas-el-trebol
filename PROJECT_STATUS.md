# Project Status — Tarimas El Trébol

Current phase: visual refinement, product-system expansion, and section-by-section reference matching.

Latest implementation pass: v35 location/footer ordering and footer reference rebuild.

Completed in this pass:

- Moved `Ubicación y cobertura` to the final home section immediately before the footer.
- Removed the old standalone `¿Listo para cotizar?` final CTA section from the home flow.
- Reworked `Ubicación y cobertura` toward the supplied reference: updated headline/copy, detail grid, right-side map composition, location reasons card, and dark CTA banner.
- Preserved the OpenStreetMap / Leaflet implementation with the custom trébol marker and no Google Maps API key requirement.
- Rebuilt the footer toward the supplied reference with the correct brand logo, product/service/sector/company/contact columns, dark-green copyright bar, and only one Facebook social item.
- Updated default contact email to `ventas@eltreboltarimas.com.mx` to match the supplied footer reference.
- Removed the retired `FinalCTA.vue` component and final CTA CSS.
- Rebuilt successfully with `npm run build`.

Plan status updates:

- Contact behavior remains centralized: WhatsApp uses `722 547 2591`; phone calls use `722 537 2605`.
- The map remains keyless through OpenStreetMap tiles and uses the supplied Google Maps short link only as external location context.
- `Ubicación y cobertura` is now the last content section before the footer, matching the requested page flow.
- Footer structure now follows the latest reference and keeps only Facebook in the social area.
- Asset cleanup remains intact: screenshots are not stored in the project ZIP; `dist` and `node_modules` remain excluded from delivery.

Pending user input remains:

1. Product spreadsheet with all final tarima types, variants, measures, and capacities.
2. Final Facebook URL if the placeholder should be replaced.
3. Any real product photos from the client, if available.
4. Final service area/city/cobertura copy if it changes.
5. Final product detail behavior after the catalog pass: keep card anchors, add modal, or create individual product detail sections.
