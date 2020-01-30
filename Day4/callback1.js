function upperNivel(callback) {
    callback();
}

function printNivel() {
    return console.log(`Callback Success`);
}

upperNivel(printNivel)
