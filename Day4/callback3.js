function upperNivel(num1, num2, callback) {
    callback(num1, num2);
}

function sumNivel(num1, num2) {
    return console.log(num1 + num2);
}

function restaNivel(num1, num2) {
    return console.log(num1 - num2);
}

function multiNivel(num1, num2) {
    return console.log(num1 * num2);
}

upperNivel(2, 4, restaNivel)