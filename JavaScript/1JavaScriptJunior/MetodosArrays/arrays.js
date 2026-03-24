// metodo pop
let nombres = ["pedro", "maria", "jorge"];

let resultado = nombres.pop();
document.writeln(resultado+`<b> Pop Elimina el ultimo elemento del array, y ademas de eliminarlo lo muestra</b><br>`);
document.writeln(`${nombres} El resultado de el array nombres ahora quedo asi<br><br>`);

// metodo shift
let nombres2 = ["pedro", "maria", "jorge"];
resultado=nombres2.shift();
document.writeln(resultado+`<b> Shift Elimina el primer elemento del array, y ademas de eliminarlo lo muestra</b><br>`);
document.writeln(`${nombres2} El resultado de el array nombres2 ahora quedo asi<br><br>`);

// metodo push
let nombres3 = ["pedro", "maria", "jorge"];
resultado=nombres3.push("Alejandro");
document.writeln(resultado+` <b>Push Agrega un valor en la posicion que querramos</b><br>`);
document.writeln(`${nombres3} El resultado de el array nombres3 ahora quedo asi<br><br>`);

// reverse invierte el orden de los elementos de un array
let nombres4 = ["pedro", "maria", "jorge"];
resultado=nombres4.reverse();
document.writeln(resultado+` <b>Reverse Invierte el orden de los elementos el array</b><br>`);
document.writeln(`${nombres4} El resultado de el array nombres4 ahora quedo asi<br><br>`);

// unshift agrega uno o mas elementos al inicio del array y devuelve la nueva longitud del array
let nombres5 = [0,1,2,3,4,5];
// se le dice los valores que se añadiran  al array, en este caso se añadiran el 0 y el 4
resultado=nombres5.unshift(0,4);
document.writeln(resultado+` <b>Unshift Agrega uno o mas elementos al inicio del array</b><br>`);
document.writeln(`${nombres5} El array con los nuevos valores agregados es asi<br><br>`);

// sort ordena los elementos del array
let numeros = [5,7,3,5,1,9,2];
numeros.sort();
document.writeln(numeros+` <b>Sort Ordena los elementos del array</b><br><br>`);

// splice cambia el contenido del array eliminando elementos antiguos y añadiendo nuevos
let nombres6 = ["pedro", "maria", "jorge"];
// Asi elimina todo, pero se le puden dar posiciones a partir de donde
resultado=nombres6.splice(1,2);
document.writeln(`${nombres6} El resultado de el array nombres6 quedo unicamente con pedro porque los demas se borraron<br>`);
document.writeln(resultado+` <b> <- Devuelve un array con los elementos eliminados</b><br><br>`);

// join convierte el array en un String
let nombres7=  ["pedro", "maria", "jorge"];
resultado=nombres7.join("-");
document.writeln(resultado+` <b>Join cambia el array en un String</b> esta es la copia que ya no es array, su posicion 0 es ${resultado[0]}<br>`);
document.writeln("Aparte los separa por lo que pongamos en join<br>");
document.writeln(`${nombres7} Aparentemente estan iguales pero su posicion[0] es: ${nombres7[0]} asi que sigue siendo un array<br><br>`);

// slice devuelve un nuevo array sin los elementos que hayamos dicho
let nombres8=  ["pedro", "maria", "jorge"];
resultado=nombres8.slice(1,2);
document.writeln(nombres8+`<b> El array original sigue igual y es este</b><br>`);
document.writeln(`${resultado} <b>es el array copia, solamente va a mantener los elementos de la posicion que hayamos dicho</b><br><br>`);


//filter itera un array y la variable que queramos en cada iteracion le va a dar el valor de una posicion del array
let numeros2 = ["abecedario","manzana","pedro","dedo","bobo","pedro"];
document.writeln(`<b>El metodo filter hace que en cada iteracion guarde en una variable en orden cada valor del array</b><br>`)
numeros2.filter(function num(numero){
    document.writeln(numero+`<br>`);
});