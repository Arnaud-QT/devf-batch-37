class Cuenta {
    constructor(titular, cantidad) {
        this.titular = titular;
        this.cantidad = cantidad;
    }

    ingresar(cantidad){
        if (this.cantidad + cantidad < 900) {
            return this.cantidad += cantidad;
        }
    }

    retirar(cantidad){
        if (this.cantidad - cantidad > 10) {
            return this.cantidad -= cantidad;
        }
    }
}

let Cuenta_A = new Cuenta("Arnaud", 400)
Cuenta_A.ingresar(700)
Cuenta_A.retirar(50)
console.log(Cuenta_A)