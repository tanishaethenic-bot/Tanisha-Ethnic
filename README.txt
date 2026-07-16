TANISHA ETHNICS V26 — ULTIMATE FINAL BUILD

FIXED
- Correct Supabase project and publishable key retained.
- Storefront missing videos database query fixed.
- Admin Videos add/edit/delete/show-hide retained.
- Admin login improved: account creation, forgot password and email magic-link login.
- New black-gold Tanisha Ethnic logo installed across website/PWA.
- V26 cache busting and network-first JS/CSS loading to prevent stale admin code.
- setup.sql reloads Supabase REST schema cache.

DEPLOY
Extract ZIP, upload all files to GitHub repository root, and commit to main. Netlify auto-deploys.

DATABASE
Run setup.sql once in the Supabase project shown in config.js. It is safe to re-run.
