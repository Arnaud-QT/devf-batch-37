class Persona {
    constructor(nombre, edad, sexo, peso, altura){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        return this.nombre + " tiene un IMC de " + Math.round(this.peso / (this.altura*this.altura))
    }

    esMayorDeEdad() {
        if (this.edad >= 18){
            return this.nombre + " is mayor de edad."
        }
        else {
            return this.nombre + " is menor de edad."
            }    
        }
    }

let jean = new Persona("Jean", 19, "Hombre", 78, 1.7)
console.log(jean.esMayorDeEdad())
console.log(jean.calcularIMC())