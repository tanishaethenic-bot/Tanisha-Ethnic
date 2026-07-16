TANISHA ETHNICS V23 — FINAL VIDEO TAB FIX BUILD

MAIN FIX
- Admin Videos tab blank screen fixed.
- admin.js, admin.html and admin.css all have new V23 content and cache-busting URLs.
- Opening Videos always restores the panel and loads Supabase video records.
- Add Video form remains visible even when there are zero videos.
- Upload MP4/WebM, edit, show/hide and delete retained.
- Website video section, products, offers, reviews, cart, wishlist and PWA retained.

DEPLOY
1. ZIP extract karein.
2. Extracted folder ke ANDAR ki all files GitHub repository root me upload/replace karein.
3. Make sure admin.js, app.js, service-worker.js bhi selected hon.
4. Commit message: Tanisha Ethnics V23 final video fix
5. Netlify deploy complete hone ke baad admin.html?tab=videos open karein.

CACHE
Chrome me site data clear karein ya old installed PWA uninstall karke reinstall karein.
V23 files use unique ?v=23-final-1 URLs, isliye old V15/V22 JavaScript reuse nahi hona chahiye.

SUPABASE
V22 setup.sql success se run ho chuka hai to dobara zaroori nahi. Missing-table error aaye tabhi setup.sql run karein.

ADMIN
/admin.html
Email: tanishaethnic@gmail.com
Password: Supabase admin user password.
