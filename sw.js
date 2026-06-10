const CACHE_NAME = 'zepox-admin-v1';
const assets = ['./', './index.html']; // Inasoma eneo ambalo admin ipo kwenye GitHub bila kupotea

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', fetchEvent => {
  fetchEvent.respondWith(
    fetch(fetchEvent.request).catch(() => caches.match(fetchEvent.request))
  );
});
