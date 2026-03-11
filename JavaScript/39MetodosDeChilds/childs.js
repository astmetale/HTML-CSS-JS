const contenedor = document.querySelector(".contenedor");

const parrafo = document.createElement("P").innerHTML="Parrafo";
const h2_nuevo = document.createElement("H2");
h2_nuevo.innerHTML="Titulo";

let h2_antiguo =document.querySelector(".h2");
let respuesta = contenedor.hasChildNodes();

if(respuesta == true){
    document.writeln("El elemento si tiene hijos");
}else{
    document.writeln("El elemento no tiene hijos");
}