# Specification

## Summary
**Goal:** Add a Cart option to the site header (top-right) that works across desktop and mobile, and provide a basic Cart page at `/cart`.

**Planned changes:**
- Update the SiteHeader to include a top-right Cart icon/button that is keyboard accessible and includes an sr-only label (e.g., “Cart”) while preserving existing responsive behavior (desktop nav and mobile sheet menu).
- Add a new `/cart` route and Cart page with English empty-state text (e.g., “Your cart is empty.”) styled consistently with the existing Farm2Retail UI.

**User-visible outcome:** Users can click a Cart icon in the header from any page to navigate to a Cart screen that shows an empty-state message.
