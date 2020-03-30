function log(msg) {
    const STYLES = "font-size:12px; color:white;background-color:#78c850; padding:3px; border-radius:5px;";
    console.log("%cregister", STYLES, msg);
}

log("Validando el uso de navigator.serviceWorker");
if ("serviceWorker" in navigator) {
    window
        .addEventListener("load", () => {
            log("cargando poke-worker");
            navigator
                .serviceWorker
                .register("./poke-worker.js")
                .then(registration => log(`Service Worker registrado! Scope: ${registration.scope}`))
                .catch(error => log(`Service Worker registro fallidp!: ${error}`));
        });
}
