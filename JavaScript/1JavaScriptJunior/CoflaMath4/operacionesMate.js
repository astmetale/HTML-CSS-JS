let op = 0;
while(op != 8){
    op = parseInt(prompt(`1. Suma\n2. Resta\n3. Division\n4. Multiplicacion\n5. Potencia\n6. Raices Cuadradas\n7. Raices Cubidas\n8. Salir`));
    let op1, op2;
    switch(op){
        case 1:
            op1 = prompt(`Ingrese el numero 1:`);
            op2 = prompt(`Ingrese el numero 2:`);
            op1 = parseInt(op1); 
            op2= parseInt(op2);
            alert(`El resultado de la suma es: ${(op1+op2)}`);
            break;
        case 2:
            op1 = prompt(`Ingrese el numero 1:`);
            op2 = prompt(`Ingrese el numero 2:`);
            alert(`El resultado de la resta es: ${op1-op2}`);
            break;
        case 3:
            op1 = prompt(`Ingrese el numero 1:`);
            op2 = prompt(`Ingrese el numero 2:`);
            alert(`El resultado de la division es: ${op1/op2}`);
            break;
        case 4:
            op1 = prompt(`Ingrese el numero 1:`);
            op2 = prompt(`Ingrese el numero 2:`);
            alert(`El resultado de la multiplicacion es: ${op1*op2}`);
            break;
        case 5:
            op1 = prompt(`Ingrese el numero:`);
            op2 = prompt(`Ingrese la potencia:`);
            op1 = Math.pow(op1,op2);
            alert(`El resultado de la potencia es: ${op1}`)
            break;
        case 6:
            op1 = prompt(`Ingrese el numero:`);
            alert(`El resultado de la raiz cuadrada es: ${(Math.sqrt(op1))}`);
            break;
        case 7:
            op1 = prompt(`Ingrese el numero:`);
            alert(`El resultado de la raiz cubica es: ${(Math.cbrt(op1))}`);
            break;
    }
    

}