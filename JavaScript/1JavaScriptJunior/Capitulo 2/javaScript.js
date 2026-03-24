// fruta = ['platano','manzana','pera'];
// document.writeln(fruta[0]+"<br>");

// numb = 1;
// while(numb <= 5){
//     document.writeln(numb+" esto es un while <br>");
//     numb++;
// }

// for(let i=1; i<11; i++){
//     if(i == 6){
//         continue; //Indica que en esta iteracion no haga nada y pase a la siguiente iteracion

//     }
//     document.writeln("El numero es: "+i+" esto es un for <br>");

// }

// let animales = ['gato', 'perro','pato'];

// for(animal in animales){
//     document.writeln(animal+'<br>'); //for in nos dice la posicion de lo que esta escrito en este caso 0,1,2
// }
// document.writeln('<br>');

// for(animal of animales){
//     document.writeln(animal);//for of en vez de decir la posicion nos dice cada uno de los animales en orden
// }
// document.writeln("<br>");
// array1 = ["Alejandro", "Sebastian", "Carlos"];
// array2 = ["David","Fernanda",array1, "Luisa"];
// forGrande:
// for (let array in array2){
//     if(array ==  2){
//         for(let array0 of array1){
//             document.writeln(array0+"<br>");
//         }
//     }else{
//         document.writeln(array2[array]+"<br>");
//     }
// }


// // FUNCIONES
// function saludar(){
//     respuesta = prompt("Hola como fue tu dia");
//     if(respuesta == "bien"){
//         alert("Que bueno");
//     }else{
//         alert("una pena");
//     }
// }
// saludar();
// // puede ser function con return


// Puede ser una funcion con variables
function suma(valor1, valor2){
    let suma = valor1+valor2;
    return suma;
}
document.writeln(suma(3,5));

// FUNCIONES FLECHA
// function saludar(nombre){
//     let frase = `Hola ${nombre} Como estás?`;
//     document.writeln(frase);
// }
// este de arriba es un function normal

// const saludar = function(nombre){
//     let frase = `Hola ${nombre} Como estás?`;
//     document.writeln(frase);
// }

// Son dos formas de llegar a lo mismo
// funciones flecha:

const saludar =(nombre)=>{
    let frase = `Hola ${nombre} Como estás?`;
    document.writeln(frase);
}
saludar("Ale");