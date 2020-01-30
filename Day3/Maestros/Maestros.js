class Maestros {
    constructor(calificacion, materia){
        this.calificacion = calificacion;
        this.materia = materia;
    }

    getPromedio(){

        let cantidad = this.calificacion.length
        let total = 0

        this.calificacion.forEach(element => 
            total = total + element
            )
            return "El promedio de " + this.materia + " es de " + (total/cantidad)
    }
}

module.exports =  Maestros;