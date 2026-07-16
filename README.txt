TANISHA ETHNIC V30 — COUPON MANAGER REVIEWED BUILD

CODE REVIEW FIXES
- Removed missing menu-safety.js reference. Only one menu controller remains in app.js.
- Service worker no longer caches a nonexistent file, so install should not fail.
- Menu closes on backdrop, link, close button and Escape; aria state is updated.
- Cart and Wishlist zero badges are hidden.
- Black-gold logo was tightly cropped; 192, 512 and Apple icons regenerated at correct sizes.
- Brand name is consistently Tanisha Ethnic.
- Admin is login-only: no Create Admin and no Forgot Password.
- Coupon CRUD, cart coupon validation and WhatsApp discount summary are included.
- Video CRUD/upload code and V30 SQL table/storage setup are included.

CONNECTED DATABASE
This build intentionally uses project aecescczeizgssmderdw because it is the project that previously contained the existing products.
Run this build's setup.sql in THAT SAME project to add videos and coupons without deleting products.
The admin email must exist under Authentication > Users in that same project.

DEPLOY
1. Extract the ZIP.
2. Upload/replace every file in GitHub repository root.
3. Commit: Tanisha Ethnic V30 coupon manager reviewed
4. Let Netlify publish.
5. Clear old site data / uninstall old PWA once, then reopen.
