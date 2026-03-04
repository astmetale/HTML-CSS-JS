const rango = document.querySelector(".rango");
rango.setAttribute("type","range");

let valorAtributo = rango.getAttribute("type");
document.writeln(valorAtributo);

rango.removeAttribute();

