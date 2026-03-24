let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let materia = document.getElementById("materia");
let botonEnviar = document.getElementById("btn-enviar");
let resultado = document.querySelector(".resultado");

const validarCampos = ()=>{
    let error = [];
    if(nombre.value.length<5){
        error[0] = true;
        error[1] = "El nombre no puede tener menos de 5 caracteres";
        return error;
    }else if(nombre.value.length>40){
        error[0] = true;
        error[1] = "El nombre no puede tener mas de 5 caracteres";
        return error;
    }else if(email.value.length<5 || email.value.length > 40  || email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        error[0] = true;
        error[1] = "El email necesita entre 5 y 40 caracteres, ademas de @ y .";
        return error;
    }else if(materia.value.length <4 || materia.value.length > 40){
        error[0] = true;
        error[1] = "La materia necesita entre 5 y 40 caracteres";
        return error;
    }
    error[0] = false;
    return error;
}

botonEnviar.addEventListener("click", (e)=>{
    e.preventDefault();
    let error = validarCampos();
    if(error[0] == true){
        resultado.innerHTML = error[1];
        resultado.classList.add("red");
    }else{
        resultado.innerHTML = "Formulario enviado correctamente";
        resultado.classList.add("green");
        resultado.classList.remove("red");
    }
});
