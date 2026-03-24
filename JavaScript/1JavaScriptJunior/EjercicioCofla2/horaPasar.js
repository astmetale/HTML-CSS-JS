let free = false;
function validarCliente(time){
    let edad = prompt("Cual es tu edad?");
    if(edad>=18){
        if(time >= 2 && time < 7 && free == false){
            alert("Puedes pasar gratis");
            free=true;
        }else{
            alert(`Puedes pasar pero se te cobrará ${time} hrs`);
        }

    }else{
        alert("Es menor de edad");
    }
}
validarCliente(1);
validarCliente(3);