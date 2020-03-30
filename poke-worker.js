importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js");

function log(msg) {
    const STYLES = "font-size:12px; color:white;background-color:#a040a0; padding:3px; border-radius:5px;";
    console.log("%csw", STYLES, msg);
}

if (workbox) {
    log("WorkBox esta listo 🎉");
    const revision = "pokemon_001";

    workbox.precaching.precacheAndRoute([
        {
            url: "/workshop-pwa/pokemons.json",
            revision,
        },
        {
            url: "/workshop-pwa/js/lib/underscore-min.js",
            revision,
        },
        {
            url: "/workshop-pwa/js/lib/angular.min.js",
            revision,
        },
        {
            url: "/workshop-pwa/js/lib/angular-route.min.js",
            revision,
        },
        {
            url: "/workshop-pwa/js/app.js",
            revision,
        },
        {
            url: "/workshop-pwa/js/controllers.js",
            revision,
        },
        {
            url: "/workshop-pwa/js/directives.js",
            revision,
        },
        {
            url: "/workshop-pwa/js/filters.js",
            revision,
        },
        {
            url: "/workshop-pwa/js/services.js",
            revision,
        },
        {
            url: "/workshop-pwa/script.js",
            revision,
        },
        {
            url: "/workshop-pwa/css/bootstrap.min.css",
            revision,
        },
        {
            url: "/workshop-pwa/css/bootstrap-theme.min.css",
            revision,
        },
        {
            url: "/workshop-pwa/css/main.css",
            revision,
        },
        {
            url: "/workshop-pwa/",
            revision,
        },
        {
            url: "/workshop-pwa/partials/pokemon-image.html",
            revision,
        },
        {
            url: "/workshop-pwa/partials/pokemon-name.html",
            revision,
        },
        {
            url: "/workshop-pwa/partials/pokemon-type.html",
            revision,
        },
        {
            url: "/workshop-pwa/views/pokedex.html",
            revision,
        },
    ]);

    workbox.routing.registerRoute(
        /(.*)partials(.*)\.(html)/,
        new workbox.strategies.CacheFirst({
            cacheName: "pokemons_partials",
        }),
    );

} else {
    log("WorkBox no esta disponible 🤬");
}
