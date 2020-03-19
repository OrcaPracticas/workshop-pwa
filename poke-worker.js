const POKE_CACHE = "pokemon_cache";
const ELEMETS_TO_CACHE = [
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
    "./img/icons/icon_512x512.png"
];


// Se instala el servicesWorker
self.addEventListener("install", (event) => {
    console.log("📦 Instalando cache");
    event
        .waitUntil(
            caches.open(POKE_CACHE)
                .then(cache => cache
                        .addAll(ELEMETS_TO_CACHE)
                            .then(() => self.skipWaiting())
                )
                .catch(error => console.error("Fallo registrando cache =>" , error))
        );
});

// Activando el serviceWorker
self.addEventListener("activate", (event) => {
    console.log("📚 Activando");
    const WHITE_LIST = [ELEMETS_TO_CACHE];
    event
        .waitUntil(
            caches
                .keys()
                .then(cacheNames => Promise.all(
                    cacheNames.map((cacheName) => {
                        if(WHITE_LIST.indexOf(cacheName) === -1) {
                            return caches.delete(cacheName);
                        }
                    })
                ))
               .then(() => self.clients.claim())
        )
});

// Cuando se recupoera la URL
self.addEventListener("fetch", (event) => {
    event
        .respondWith(
            caches
                .match(event.request)
                    .then((response) => {
                        if(response) return response;
                        return fetch(event.request)
                    })
        )
})
