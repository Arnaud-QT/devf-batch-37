var arreglo = [2, 3, 4];

var arreglo_total = 0

for (i = 0; i < arreglo.length; i++) {
    arreglo_total = arreglo_total + arreglo[i];
}

document.write("El arreglo es " + arreglo + "<br>");
document.write("El promedio es " + arreglo_total/arreglo.length);