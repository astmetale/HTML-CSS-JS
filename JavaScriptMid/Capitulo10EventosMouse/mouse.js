const button = document.querySelector(".button");
const contenedor1 = document.querySelector(".contenedor");

contenedor1.addEventListener("mouseup", (e)=>{
    alert("Di click en el contenedor rojo");
});
button.addEventListener("dblclick", (e)=>{
    alert("Di doble click en un botón");
});

