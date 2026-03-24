// sqrt hace que realice la raiz cuadrada
let numero = Math.sqrt(25);
document.writeln(`<b>La raiz cuadrada es</b> ${numero} <br>`);
// cbrt hace que realice la raiz cubica
numero = Math.cbrt(25);
document.writeln(`<b>La raiz cubica es</b> ${numero} <br>`);
// max devuelve el numero mas grande
numero = Math.max(25,1,3,5,2,98,8);
document.writeln(`<b>El numero mas grande es </b>${numero} <br>`);
// Min devuelve el numero menor
numero = Math.min(25,1,3,5,2,98,8);
document.writeln(`<b>El numero mas pequeño es </b>${numero} <br>`);
// random es un numero aleatorio
numero = Math.random();
document.writeln(`<b>El numero aleatorio entre 0 y 1 es </b>${numero} <br>`);
// round numero redondeado al numero entero mas cercano
numero = Math.random()*100;
numero = Math.round(numero);
document.writeln(`<b>Numero redoneado al numero entero mas cercano: </b>${numero}<br>`);
// floor devuelve a su parte entera, no al numero que sigue sino su parte entera
numero = Math.floor(4.9999999);
document.writeln(`<b>Hace que devuelva la parte entera el numero: </b>${numero}<br>`);
// trunc elimina los digitos despues del punto decima
numero = Math.trunc(4.9999999);
document.writeln(`<b>Elimina los numeros decimales de un numero </b>${numero}<br>`);

