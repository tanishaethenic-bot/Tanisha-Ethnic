TANISHA ETHNICS V24 — SUPABASE SYNC FINAL BUILD

WHAT IS FIXED
- Website and Admin now connect to the correct Supabase project: cxydymcjgxgcdqgltnii.
- Correct publishable key added in config.js.
- Videos tab blank-panel fix from V23 retained.
- Video upload, edit, show/hide and delete code retained.
- New V24 cache-busting and service-worker cache version added.

IMPORTANT FIRST-TIME DATABASE SETUP
This correct Supabase project currently has no tables. Supabase SQL Editor me is ZIP ka complete setup.sql ek baar Run karein. Isse products, offers, site_settings, reviews, videos and storage buckets create honge.

ADMIN USER
Supabase Authentication > Users me tanishaethnic@gmail.com admin user isi correct project me create/invite karein. Password wahi hoga jisse Admin Panel me login karenge.

GITHUB DEPLOY
1. ZIP extract karein.
2. Extracted folder ke andar ki saari files GitHub repository root me upload/replace karein.
3. Commit directly to main.
4. Commit message: Tanisha Ethnics V24 Supabase sync final
5. Netlify automatically deploy karega.

AFTER DEPLOY
Old installed PWA uninstall karein ya site data clear karein, phir website/admin dobara kholen.
