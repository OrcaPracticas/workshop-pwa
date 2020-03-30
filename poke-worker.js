importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js");

function log(msg) {
    const STYLES = "font-size:12px; color:white;background-color:#a040a0; padding:3px; border-radius:5px;";
    console.log("%csw", STYLES, msg);
}

if (workbox) {
    log("WorkBox esta listo 🎉");
} else {
    log("WorkBox no esta disponible 🤬");
}
