const button = document.querySelector(".button");
const contenedor = document.querySelector(".contenedor");

button.addEventListener("click",(e)=>{
    alert("di click en el boton");
    e.stopPropagation();
});
contenedor.addEventListener("click",(e)=>{
    alert("di click en el contenedor");
},true);