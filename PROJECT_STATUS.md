# Project Status — Tarimas El Trébol

Current phase: visual refinement, product-system expansion, and section-by-section reference matching.

Latest implementation pass: v21 contact number separation and WhatsApp routing correction.

Completed in this pass:

- Set WhatsApp to `722 547 2591` through the centralized contact config. The generated WhatsApp URL now uses `527225472591`.
- Kept phone calls on `722 537 2605` across header, hero, products, services, final CTA, catalog page, and footer.
- Updated the hero contact strip so the WhatsApp number links to WhatsApp instead of `tel:` and the phone number remains a `tel:` link.
- Updated the footer contact block to label `Teléfono` and `WhatsApp` explicitly instead of treating both numbers as phone-call links.
- Added explicit environment variables: `VITE_WHATSAPP_NUMBER`, `VITE_WHATSAPP_PHONE`, and `VITE_PHONE_CALL_NUMBER`.
- Preserved backwards-compatible contact aliases in `src/data/contact.ts` while exposing clearer semantic fields: `phoneCallNumber` and `whatsappPhone`.
- Rebuilt successfully with `npm run build`.

Plan status updates:

- Contact behavior is now centralized and explicit: WhatsApp and phone-call flows are separate by default.
- Section foundation: service content remains data-driven and rendered through the existing reusable icon system.
- Nuestra misión: curved desktop image remains on the supplied warehouse photo.
- Nuestros productos: concrete texture remains active behind transparent tarima images, with non-wrapping WhatsApp CTAs.
- Soluciones personalizadas: desktop reference calibration remains in place.
- Servicios adicionales: full reference structure remains active and height-calibrated for shorter desktop viewports.
- Asset cleanup: screenshots are not stored in the project ZIP; `dist` and `node_modules` remain excluded from delivery.

Pending user input remains:

1. Product spreadsheet with all final tarima types, variants, measures, and capacities.
2. Final latitude/longitude for Google Maps.
3. Any real product photos from the client, if available.
4. Final service area/city/cobertura copy.
5. Final product detail behavior after the catalog pass: keep card anchors, add modal, or create individual product detail sections.
