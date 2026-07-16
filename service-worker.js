const CACHE='tanisha-v26-ultimate-final-20260716';
const CORE=['/','/index.html','/styles.css','/app.js','/config.js','/brand-round.png','/brand-transparent.png','/product-placeholder.svg','/manifest.webmanifest'];
self.addEventListener('install',event=>{self.skipWaiting();event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)))});
self.addEventListener('activate',event=>{event.waitUntil(Promise.all([self.clients.claim(),caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key))))]))});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);
  if(url.origin!==location.origin)return;
  const isPage=event.request.mode==='navigate'||event.request.destination==='document';const isFreshAsset=['script','style'].includes(event.request.destination)||url.pathname.endsWith('/config.js');
  if(isPage||isFreshAsset){event.respondWith(fetch(event.request).then(response=>{if(response.ok)caches.open(CACHE).then(cache=>cache.put(event.request,response.clone()));return response}).catch(()=>caches.match(event.request).then(r=>r||caches.match('/index.html'))));return}
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{if(response.ok)caches.open(CACHE).then(cache=>cache.put(event.request,response.clone()));return response})));
});
