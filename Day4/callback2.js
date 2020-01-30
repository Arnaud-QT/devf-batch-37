function upperNivel(name, callback) {
    callback(name);
}

function printNivel(param) {
    return console.log(`Callback Success ${param}`);
}

upperNivel("Arnaud", printNivel)
