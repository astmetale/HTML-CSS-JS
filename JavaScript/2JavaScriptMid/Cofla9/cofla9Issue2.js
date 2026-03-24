let alumnos = [{
    nombre: "Alejandro Suarez",
    email: "astmetale@gmail.com",
    materia: "Fisica"
},
{
    nombre: "Luis David",
    email: "luisdavid@gmail.com",
    materia: "Matematicas"
},
{
    nombre: "Karim Alcantar",
    email: "karimalcantar@gmail.com",
    materia: "Programacion Orientado a objetos"
},
{
    nombre: "Valeria Hernandez",
    email: "valeria@gmail.com",
    materia: "Base de datos"
},
{
    nombre: "Agba Iran Esquivel",
    email: "agbairan@gmail.com",
    materia: "Redes"
}];

const boton = document.querySelector(".boton-confirmar");
const contenedor = document.querySelector(".grid-container");

for(alumno in alumnos){
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    let htmlCode = `
    <div class="grid-item nombre">${nombre}</div>
        <div class="grid-item email">${email}</div>
        <div class="grid-item materia">${materia}</div>
        <div class="grid-item semana">
            <select name="" id="" class="semana-elegida">
                <option value="Semana-1">Semana 1</option>
                <option value="Semana-2">Semana 2</option>
            </select>
        </div>`;
    contenedor.innerHTML+=htmlCode;
}

boton.addEventListener("click", ()=>{
    let confirmar = confirm("Realmente quieres confirmar las mesas?");
    if(confirmar == true){
        document.body.removeChild(boton);
        let elementos = document.querySelectorAll(".semana");
        let semanasElegidas = document.querySelectorAll(".semana-elegida");
        for(elemento in elementos){
            semana = elementos[elemento];
            semana.innerHTML=semanasElegidas[elemento].value;
        }
    }
})

