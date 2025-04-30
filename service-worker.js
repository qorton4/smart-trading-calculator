self.addEventListener('install', event => {
    console.log('Service Worker installed');
    event.waitUntil(
      caches.open('trade-calculator-cache').then(cache => {
        return cache.addAll([
          './',
          './index.html',
          './manifest.json',
          './service-worker.js',
          './icon-192.png',
          './icon-512.png'
          // Add your CSS/JS file paths here if you move them into separate files later
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
  