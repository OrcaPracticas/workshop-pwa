// Validando que exista el serviceWorker
if ("serviceWorker" in navigator) {
    console.log("Se inicia el registro de poke-worker");
    navigator
        .serviceWorker
            .register("./poke-worker.js")
                .then(register => console.log("🤟 Se registro exitosamente poke-worker => ", register))
                .catch(error => console.error("👎 Error registrando poke-worker => ", error));
}