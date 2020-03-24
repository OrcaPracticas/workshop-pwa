// This is the "Offline page" service worker

importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js");

const CACHE = "v1_pokemon_cache_pwabuilder";

// TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "offline.html";
const offlineFallbackPage = [
    "./",
    "./script.js",
    "./js/lib/underscore-min.js",
    "./js/lib/angular.min.js",
    "./js/lib/angular-route.min.js",
    "./js/app.js",
    "./js/controllers.js",
    "./js/directives.js",
    "./js/filters.js",
    "./js/services.js",
    "./css/bootstrap.min.css",
    "./css/bootstrap-theme.min.css",
    "./css/main.css",
    "./img/icons/icon_512x512.png",
];

self.addEventListener("message", (event) => {
    if (event.data && event.data.type === "SKIP_WAITING") {
        self.skipWaiting();
    }
});

self.addEventListener("install", async (event) => {
    event.waitUntil(
        caches.open(CACHE)
            .then((cache) => cache.add(offlineFallbackPage)),
    );
});

if (workbox.navigationPreload.isSupported()) {
    workbox.navigationPreload.enable();
}

self.addEventListener("fetch", (event) => {
    if (event.request.mode === "navigate") {
        event.respondWith((async () => {
            try {
                const preloadResp = await event.preloadResponse;

                if (preloadResp) {
                    return preloadResp;
                }

                const networkResp = await fetch(event.request);
                return networkResp;
            } catch (error) {
                const cache = await caches.open(CACHE);
                const cachedResp = await cache.match(offlineFallbackPage);
                return cachedResp;
            }
        })());
    }
});
