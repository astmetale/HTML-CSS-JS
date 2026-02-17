string = "cadena de texto"
number = 19
booleano = false
const constante = "alejandro"; //Valor const no se puede modificar
// Const se tiene que inicializar cuando se declare
let numero; 
alert(numero);
// Si no se crea su valor en el alert es undefined ya que no tiene valor
numero = 29;
alert(numero); //Ahora si tiene un valor y en vez de undefined su valor es 29

let numero1 = 23, numero2 = 39;// Tambien se pueden poner dos variables juntas asi <-

let numeroNull = null; //Es una variable que se crea vacia a proposito cuenta como inicializaada

let numero3 = 1;
let numero4 = 2;
alert(numero3+numero4); //Aqui si suma los dos numeros porque tienen un valor

let numberNan1;
let numberNan2;
alert(numberNan1 * numberNan2); //Aqui no, aqui de NaN (Not a number) porque no están dadas de alta

let var1 = 1;
let var2 = "Hola";
alert(var1 * var2); //Da NaN porque no es un numero solo el primero

let nombre = prompt("Dime tu nombre"); //Nos escribe lo que se escribe ahi y lo que respondas 
// es la variable a la que se lo asignaste, en este caso a "nombre"
alert("Hola " + nombre);

// OPERADORES
let numero5 = 10;
numero5+=5;//suma
document.writeln(numero5);
// numero-=5; resta
// numero*=5; multiplicacion
// numero/=5; division
// numero%=5; residuo resta
// numero**=5; exponente

// ARITMETICOS
numero11 = 10;
numero22 = 5;
// resultado = numero11 + numero22; ADICION
// resultado = numero11--; REDUCCION
// resultado = numero11 / numero22; DIVISION
alert(resultado);