importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js");

if (workbox) {
    workbox.core.setCacheNameDetails({
        prefix: "my-app",
        suffix: "v1",
        precache: "precache-cache",
        runtime: "runtime-cache",
    });

    workbox.routing.registerRoute(
        /\.(?:js|css)$/, // Todos los archivos con extensión js o css
        workbox.strategies.cacheFirst({
            cacheName: workbox.core.cacheNames.precache, // nombre de la cache donde queremos guardar el recurso
        }),
    );
} else {
    console.log("Boo! Workbox didn't load 😬");
}
