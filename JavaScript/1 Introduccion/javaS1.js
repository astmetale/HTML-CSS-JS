// string = "cadena de texto"
// number = 19
// booleano = false
// const constante = "alejandro"; //Valor const no se puede modificar
// // Const se tiene que inicializar cuando se declare
// let numero; 
// alert(numero);
// // Si no se crea su valor en el alert es undefined ya que no tiene valor
// numero = 29;
// alert(numero); //Ahora si tiene un valor y en vez de undefined su valor es 29

// let numero1 = 23, numero2 = 39;// Tambien se pueden poner dos variables juntas asi <-

// let numeroNull = null; //Es una variable que se crea vacia a proposito cuenta como inicializaada

// let numero3 = 1;
// let numero4 = 2;
// alert(numero3+numero4); //Aqui si suma los dos numeros porque tienen un valor

// let numberNan1;
// let numberNan2;
// alert(numberNan1 * numberNan2); //Aqui no, aqui de NaN (Not a number) porque no están dadas de alta

// let var1 = 1;
// let var2 = "Hola";
// alert(var1 * var2); //Da NaN porque no es un numero solo el primero

// let nombre = prompt("Dime tu nombre"); //Nos escribe lo que se escribe ahi y lo que respondas 
// // es la variable a la que se lo asignaste, en este caso a "nombre"
// alert("Hola " + nombre);

// // OPERADORES
// let numero5 = 10;
// numero5+=5;//suma
// document.writeln(numero5);
// // numero-=5; resta
// // numero*=5; multiplicacion
// // numero/=5; division
// // numero%=5; residuo resta
// // numero**=5; exponente

// // ARITMETICOS
// numero11 = 5;
// numero22 = 2;
// // resultado = numero11 + numero22; ADICION
// // resultado = numero11--; REDUCCION
// // resultado = numero11 / numero22; DIVISION
// // resultado = numero11 ** numero22; EXPONENTE
// // resultado = numero11++; SUMA DESPUES DE USAR LA VARIABLE
// // numero11++;
// // resultado = numero11; SUMA ANTES DE USAR LA VARIABLE ESTA ES LA FORMA CORRECTA
// // resultado = -numero11; NEGACION, CAMBIA EL SIGNO DEL NUMERO
// // alert(resultado);

// CONCATENACION
// let texto1 = "Hola";
// let texto2 = "Mundo";
// document.writeln(texto1 + " " + texto2); //Concatenacion de texto, el espacio es para que no se pegue el texto
// nombre = "Me gusta macOS";
// frase = `Me gusta windows y ${nombre}`; //Interpolacion de variables, se tiene que usar comillas invertidas para que funcione
// document.writeln(frase); //No funciona la interpolacion de variables con comillas dobles, se tiene que usar comillas invertidas

// OPERADORES DE COMPARACION

// let numero = 23;
// let numero2 = 39;
// document.writeln(numero != numero2); //Desigualdad, da true porque no son iguales
// document.writeln(numero > numero2); //Mayor que, da false porque 23 no es mayor que 39
// document.writeln(numero < numero2); //Menor que, da true porque 23 es menor que 39
// document.writeln(numero >= numero2); //Mayor o igual que, da false porque 23 no es mayor ni igual que 39
// document.writeln(numero <= numero2); //Menor o igual que, da true porque 23 es menor que 39
// document.writeln(numero != numero2); //Desigualdad, da true porque no son iguales
// document.writeln(numero == numero2); //Igualdad, da false porque no son iguales
// document.writeln(numero === numero2); //Igualdad estricta, da false porque no son iguales y no son del mismo tipo
// document.writeln(numero !== numero2); //Desigualdad estricta, da true porque no son iguales y no son del mismo tipo
// num1 = 12;
// num2 = 24;
// num3 = 25;
// num4 = 92;
// num5 = 91;

// op = (num5 > num2 && num4 < num3) || (!(num1 === num2) || num3 != num3); //Operadores logicos, da true porque num5 es mayor que num2 y num4 es menor que num3, ademas num1 no es igual a num2 y num3 es mayor que num4
// document.writeln(op);

// CONDICIONALES

var edad = prompt("Dime tu edad");
if (edad >= 18){
    document.writeln("Eres mayor de edad")
}else if (edad<2){
    document.writeln("Eres un bebe")
}else{
    document.writeln("Eres menor de edad pero mayor a 2 años")
}

// Hola como estas