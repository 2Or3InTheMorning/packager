// These will be replaced at build-time by generate-service-worker-plugin.js
const ASSETS = ["/","checksum.worker.js","downloader.worker.js","assets/default-icon.290e09e569a1cab8e61ba93b0d23863f.png","js/vendors~icns~jszip.95f7d9de8f693738fade.js","js/icns.296a040c8d934272f2f2.js","js/jszip.72f699cabcadd741a697.js","js/packager.b20e721d51148e32da88.js","js/vendors~icns.ab28459be6dd254077bc.js","js/vendors~jszip.48e044b43b2aa9c36f60.js","js/vendors~packager.b2155e9073ccf17b4177.js"];
const CACHE_NAME = 'p4-fe754c6194d891f626649bdeec9af1cfd03588821190a18011da7e9efadd9971';

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(i => i !== CACHE_NAME).map(i => caches.delete(i))))
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== location.origin) return;
  event.respondWith(
    fetch(event.request).catch(() => {
      url.search = '';
      return caches.match(new Request(url));
    })
  );
});
