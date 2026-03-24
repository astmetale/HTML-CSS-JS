const contenedor1 = document.querySelector(".contenedor-1");
const input = document.querySelector(".input-prueba");

input.addEventListener("keydown", (e)=>{
    console.log("Cuando se presiona una tecla, justo al bajarla keydown");
});

input.addEventListener("keypress", (e)=>{
    console.log("Se dispara cuando se genera un CARÁCTER keypress")
});

input.addEventListener("keyup", (e)=>{
    console.log("Se dispara cuando SUELTAS la tecla keyup");
});