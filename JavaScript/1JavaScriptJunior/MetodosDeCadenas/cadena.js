let cadena = "Cadena 1 1 1 1 1 1";
let cadena2 = "Cadena";
let reultado;
document.writeln(`Las cadenas son: ${cadena} y ${cadena2}<br><br>`);
// Concat concatena dos strings
resultado = cadena.concat(cadena2);
document.writeln(resultado+` <b>concat</b><br>`);
//starts with nos da false o true si la cadena comienza igual que otra cadena
// Tiene que ser una cadena igual a la otra, o que la cadena 2 sea exactamente
// igual al comienzo de la cadena 1
resultado = cadena.startsWith(cadena2);
document.writeln(resultado+` <b>startsWith</b><br>`);
// endWidth es lo contrario, verifica que acaben igual las dos cadenas
resultado=cadena.endsWith(cadena2);
document.writeln(resultado+` <b>endsWith</b><br>`);
// includes busca cadenas, ya sea al inicio, al final o donde sea
resultado=cadena.includes(cadena2);
document.writeln(resultado+` <b>includes</b><br>`);
// indexOf nos regresa el indice donde se encuentra una letra
resultado = cadena.indexOf("1");
document.writeln(resultado+` <b> IndexOf del 1, en "Cadena 1 1 1 1 1 1"</b><br>`);
// lastIndexOf funciona dando el indice del ultimo objeto que coincida, no el primero
resultado = cadena.lastIndexOf("1");
document.writeln(resultado+`<b> lastIndexOf del ultimo 1, en "Cadena 1 1 1 1 1 1"</b><br>`);
// repeat repite un string n cantidad de veces
resultado = cadena.repeat(2);
document.writeln(resultado+`<b> repeat repite las veces que le pongas la cadena"</b><br>`);

document.writeln(`<b>Metodos de cadena 2</b><br>`)
// METODOS DE CADENA 2
let cad2 = `Hola, Como, Estas`;
let num = 2 ;
let trim = `    hola con espacios    `;
// split divide la cadena como le pidamos
resultado=cad2.split(",");
document.writeln(resultado+` <b><- (ARRAY) split divide la cadena como le pidamos, hace la cadena un array dividido por comas en este caso</b><br>`);
// subString nos devuelve un nuevo String desde donde le digamos
resultado=cad2.substring(0,3);
document.writeln(resultado+` <b><- (nuevo String) hace un nuevo string desde donde le digamos nosotros posiciones</b><br>`);
// toLowerCase hace la cadena a minusculas
resultado=cad2.toLowerCase();
document.writeln(resultado+` <b>ToLowerCase</b><br>`);
// toUpperCase hace lo contrario
resultado=cad2.toUpperCase();
document.writeln(resultado+` <b>ToUpperCase</b><br>`);
// toString hace que algo que no sea un string se vuelva un string
resultado = num.toString();
document.writeln(resultado+` <b>ToString</b><br>`);
// trim quita los espacios de una cadena del inicio y del final
resultado = trim.trim();
document.writeln((resultado)+` <b>Trim, quitar espacios del inicio y del final</b><br>`);
// Existe trimStart y trimEnd que quitan espacio solamente del inicio y del final 
