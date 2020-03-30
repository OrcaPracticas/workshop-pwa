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
            url: "/js/lib/underscore-min.js",
            revision,
        },
        {
            url: "/js/lib/angular.min.js",
            revision,
        },
        {
            url: "/js/lib/angular-route.min.js",
            revision,
        },
        {
            url: "/js/app.js",
            revision,
        },
        {
            url: "/js/controllers.js",
            revision,
        },
        {
            url: "/js/directives.js",
            revision,
        },
        {
            url: "/js/filters.js",
            revision,
        },
        {
            url: "/js/services.js",
            revision,
        },
        {
            url: "/script.js",
            revision,
        },
        {
            url: "/css/bootstrap.min.css",
            revision,
        },
        {
            url: "/css/bootstrap-theme.min.css",
            revision,
        },
        {
            url: "/css/main.css",
            revision,
        },
        {
            url: "/",
            revision,
        },
        {
            url: "/partials/pokemon-image.html",
            revision,
        },
        {
            url: "/partials/pokemon-name.html",
            revision,
        },
        {
            url: "/partials/pokemon-type.html",
            revision,
        },
        {
            url: "/views/pokedex.html",
            revision,
        },
    ]);
} else {
    log("WorkBox no esta disponible 🤬");
}
