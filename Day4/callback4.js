function ordenSuperior(palabra, callback){
    callback(palabra);
}

function minus(param){
    return console.log(param.toLowerCase());
}

function mayus(param){
    return console.log(param.toUpperCase());
}


ordenSuperior("PejeLagarto", mayus);