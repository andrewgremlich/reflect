// https://create-react-app.dev/docs/making-a-progressive-web-app/
// maybe use workbox?

const CACHE = "reflect_cache";

self.addEventListener("install", (evt) =>
  evt.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(["/"]))),
);

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => resp || fetch(event.request)),
  );
});

self.addEventListener("activate", (evt) =>
  evt.waitUntil(
    caches
      .keys()
      .then((keyList) =>
        Promise.all(keyList.map((key) => key !== CACHE && caches.delete(key))),
      ),
  ),
);

self.addEventListener(
  "message",
  (event) => event.data.action === "skipWaiting" && self.skipWaiting(),
);
