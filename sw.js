const CACHE_NAME = 'zepox-cache-v1';
const assets = [
    '/',
    '/index.html',
    '/https://i.ibb.co/prXN1Xmy/LOGO.png'
];

// Sakinisha Service Worker (Cache files)
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(assets);
        })
    );
});

// Fanya kazi hata offline
self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});
