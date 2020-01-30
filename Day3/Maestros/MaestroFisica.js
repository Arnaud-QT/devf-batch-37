const Maestros = require("./Maestros.js");

class MaestroFisica extends Maestros {
    constructor(calificacion, materia, antiguedad){
        super(calificacion, materia)

        this.antiguedad = antiguedad
    }

    getInfoMaestro() {
        return `Bienvenido a su materia de ${this.materia} la antigua del profesor es ${this.antiguedad}`
    }

}

module.exports = MaestroFisica;