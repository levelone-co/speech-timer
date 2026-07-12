const CACHE_NAME = 'speech-timer-v1.5.0';
const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];
const OPTIONAL_ASSETS = [
  'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Outfit:wght@300;500;700;900&display=swap'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Core files must all cache successfully so the app works fully offline.
      // Optional (cross-origin) assets are best-effort — a flaky font fetch
      // must never block the core app from being cached.
      return cache.addAll(CORE_ASSETS).then(() =>
        Promise.allSettled(OPTIONAL_ASSETS.map(url => cache.add(url)))
      );
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      const fetchPromise = fetch(event.request).then(response => {
        // Cross-origin requests without CORS (e.g. the ko-fi widget script)
        // come back as opaque responses — status is always 0 and .ok is
        // always false, so they'd otherwise never get cached for offline use.
        if (response.ok || response.type === 'opaque') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => cached);
      return cached || fetchPromise;
    })
  );
});
