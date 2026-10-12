const CACHE='seorak-v5';
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./','./index.html','./manifest.json']).then(()=>self.skipWaiting())));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET') return;
  e.respondWith(caches.match(req).then(cached=>{
    if(cached) return cached;
    return fetch(req).then(res=>{
      const clone=res.clone();
      caches.open(CACHE).then(cache=>cache.put(req,clone)).catch(()=>{});
      return res;
    }).catch(()=>caches.match('./'));
  }));
});
