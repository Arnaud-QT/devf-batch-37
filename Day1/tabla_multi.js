var number = prompt("Please enter a number from 1 to 9", "ex: 3");

for (let i = 1; i < 9; i++) {
    var multi = number * i;
    document.write(number + ' * ' + i + ' is ' );
    document.write(multi + "<br>");
}
