# Project Status — Tarimas El Trébol

Current phase: visual refinement, product-system expansion, and section-by-section reference matching.

Latest implementation pass: v43 legal pages.

Completed in this pass:

- Added internal legal pages for `Aviso de privacidad` and `Términos y condiciones`.
- Created `src/pages/LegalPage.vue` with two content modes: privacy and terms.
- Added `src/styles/sections/legal.css` for isolated legal-page layout and typography.
- Extended the lightweight app router to support `/aviso-de-privacidad` and `/terminos-y-condiciones`.
- Updated footer legal links so they no longer point to `#`.
- Drafted Mexico / Estado de México oriented legal copy for privacy, quotes, product images, delivery, cancellation, warranty/reclamation, intellectual property, liability, external links, and jurisdiction.
- Preserved unified contact number: `722 547 2591` for WhatsApp and phone.
- Rebuilt successfully with `npm run build`.

Important note:

- The legal copy is a preventive publication draft, not a substitute for formal legal review. It should be reviewed by a qualified Mexican attorney before final public use, especially if the client has specific fiscal, contract, data-treatment, invoicing, credit, delivery, or warranty processes.

Pending user input remains:

1. Product spreadsheet with all final tarima types, variants, measures, and capacities.
2. Final legal company details if `MOAN SA de CV` or the current address/email need correction.
3. Any final warranty/cancellation/payment policy from the client.
4. Final Facebook URL.
5. Final service area/city/cobertura copy if it changes.
