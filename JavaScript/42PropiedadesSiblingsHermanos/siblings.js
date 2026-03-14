const contenedor = document.querySelector(".contenedor");

const parrafo = document.createElement("P").innerHTML="Parrafo";
const h2_nuevo = document.createElement("H2");
h2_nuevo.innerHTML="Titulo";

let h2_antiguo =document.querySelector(".h2");
let h4 = document.querySelector(".h4");

console.log(h4.previousElementSibling);