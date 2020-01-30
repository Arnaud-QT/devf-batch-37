const MaestroFisica = require("./MaestroFisica")
const MaestroMusica = require("./MaestroMusica")


let notas = [4,3,6,7,8,6];
let notas2 = [2, 6, 8, 5, 3, 5];

let Maestro1 = new MaestroFisica(notas, "Fisica", 2)
console.log(Maestro1.getPromedio())

let Maestro2 = new MaestroMusica(notas2, "Musica", 4)
console.log(Maestro2.getPromedio())