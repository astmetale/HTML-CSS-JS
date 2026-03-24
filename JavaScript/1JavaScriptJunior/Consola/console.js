// FUNCIONES DE REGISTRO

// Se usa para limpiar la consola
console.clear();
// Error, se usa para escribir un mensaje de error 
console.error("Este es un error");
// info es un mensaje informativo es un mensaje informativo
console.info("Esto es un mensaje informativo");
// log es un mensaje de depuracion
console.log("Este es un mensaje de depuracion");
//argumento obligatirio debe ser un array u objeto, y un parametro adicional columns que muestra una tabla
// crea una tabla en la consola
console.table([1,2,3,4,5,6,7,8]);
// En vez de un error solo tira una advertencia
console.warn("Advertencia");
// dir muestra el array o informacion mas organizado
console.dir([1,2,3,4,5,6,7,8]);

// FUNCIONES DE CONTEO
// Nos dice cuantas veces se invoco en total le metodo count
console.count();
console.count();
// CountReset nos resetea el conteo de count
console.countReset();
console.count();

// group sirve para crear un grupo que agrupa contenido
console.group("Nombre");
// groupEnd acaba el gropo en el que esta adentro, es decir, va acabando en orden
console.groupEnd();
// groupCollapsed hace que por defecto el grupo venga cerrado
console.groupCollapsed("Nombre");
console.groupEnd();
// inicia un temporarizador
console.time();
// nos dice cuanto tiempo paso
console.timeLog();
// acaba el temporarizador
console.timeEnd();
// le agrega valores de CSS como color, etc.
console.log("%crancio", "color:red;")
// 7:21:34