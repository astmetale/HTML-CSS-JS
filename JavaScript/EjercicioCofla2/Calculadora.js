let opcion = 0;
parseInt(opcion);
while(opcion!=5){
    opcion = prompt(`Que opcion desea realizar:\n1.- Suma\n2.- Resta\n3.- Multiplicacion\n4.- Division\n5.- Salir`);
    if (opcion == 1 || opcion == 2 || opcion == 3 || opcion==4){
        let num = parseInt(prompt(`Ingrese el primer numero: `));
        let num2 = parseInt(prompt(`Ingrese el segundo numero: `));
    if(opcion==1){
        alert(`El resultado de la suma es: ${num+num2}`);
    }else if(opcion == 2){
        alert(`El resultado de la resta es: ${num-num2}`);
    }else if(opcion == 3){
        alert(`El resultado de la multiplicacion es: ${num*num2}`);
    }else if(opcion == 4){
        alert(`El resultado de la division es: ${num/num2}`);
    }
    }
    
    
}