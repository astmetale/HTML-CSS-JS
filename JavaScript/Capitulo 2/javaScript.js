fruta = ['platano','manzana','pera'];
document.writeln(fruta[0]+"<br>");

numb = 1;
while(numb <= 5){
    document.writeln(numb+" esto es un while <br>");
    numb++;
}

for(let i=1; i<11; i++){
    if(i == 6){
        continue; //Indica que en esta iteracion no haga nada y pase a la siguiente iteracion

    }
    document.writeln("El numero es: "+i+" esto es un for <br>");

}

let animales = ['gato', 'perro','pato'];

for(animal in animales){
    document.writeln(animal+'<br>'); //for in nos dice la posicion de lo que esta escrito en este caso 0,1,2
}
document.writeln('<br>');

for(animal of animales){
    document.writeln(animal);//for of en vez de decir la posicion nos dice cada uno de los animales en orden
}