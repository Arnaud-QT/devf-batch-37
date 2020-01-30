const Maestros = require("./Maestros.js");

class MaestroMusica extends Maestros {
    constructor(calificacion, materia, edad){
        super(calificacion, materia)
        this.edad = edad;
    }

    getInfoMaestro() {
        return `Bienvenido a su materia de ${this.materia} la edad del profesor es ${this.edad}`
    }
}

module.exports = MaestroMusica;