let myPenguin = {
    name: "Overbite",
    Origin: "Penguin Land",
    Notes: "Commander of a special Penguin Task Force. His mission is to bring fragile eggs back safely to home from a foreign land. "
};

myPenguin.puedeVolar = false;
myPenguin.graznar = function (){
    return "kaww kaww!!";
};

myPenguin.saludar = function (){
    return "Hola, soy un pingüino y mi nombre es " + this.name;
}

console.log("Hola, soy un pingüino y mi nombre es " + myPenguin.name);
console.log(myPenguin.saludar());
