# Project Status — Tarimas El Trébol

Current phase: visual refinement, product-system expansion, and section-by-section reference matching.

Latest implementation pass: v12 product image replacement and catalog route.

Completed in this pass:

- Replaced product imagery with the new supplied 4 × 3 pallet sheet, sliced into individual transparent WebP product assets.
- Added 12 product types to `src/data/products.ts`:
  - Tarima Barrote
  - Tarima Tacón
  - Tarima Tipo Cheep
  - Tarima Reciclada
  - Tarima Nueva Estándar
  - Tarima Personalizada
  - Tarima Reforzada para Carga Pesada
  - Tarima Doble Vista
  - Tarima de Exportación
  - Tarima Ligera Económica
  - Tarima Industrial Cerrada
  - Tarima Perimetral
- Created the full `/productos` catalog page.
- Connected the homepage `Ver todas las tarimas` CTA to `/productos`.
- Kept the homepage product section limited to the first three featured products so it preserves the current reference direction.
- Updated product detail links to navigate to `/productos#product-id` and scroll to the selected card.
- Added lightweight app routing through `useAppRoute.ts`, avoiding new router dependencies.
- Added `vercel.json` rewrite support for direct `/productos` access.
- Updated reveal behavior so route-mounted elements are observed after navigation.
- Rebuilt production output successfully with `npm run build`.

Plan status updates:

- Nuestros productos: core image replacement and full catalog page are now complete for the 12 supplied tarima types. Final product naming, copy, and categories can still be refined when the spreadsheet arrives.
- Product navigation: `Ver todas las tarimas` now leads to the new products page. Product-level `Ver detalles` links move users into the catalog and target the selected tarima.
- Product assets: the new transparent product images are stored under `public/images/products/` as individual WebP files.
- Routing: the project now supports a home view and a product catalog view without adding Vue Router.

Pending user input remains:

1. Product spreadsheet with all final tarima types, variants, measures, and capacities.
2. Final latitude/longitude for Google Maps.
3. Confirmation of final WhatsApp number.
4. Confirmation of whether both phone numbers should remain visible.
5. Any real product photos from the client, if available.
6. Final service area/city/cobertura copy.
7. Final product detail behavior after the catalog pass: keep card anchors, add modal, or create individual product detail sections.
