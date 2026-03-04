document.writeln("getElementById selecciona un elemento que tenga el id como lo escribamos ahi<br>");
let parrafo = document.getElementById("parrafo");
document.writeln(parrafo);

document.writeln("<br><br>getElementsByTagName selecciona un los elementos del tipo que le pongamos en este caso p<br>");
parrafo = document.getElementsByTagName("p");
document.writeln(parrafo[0]);

document.writeln("<br><br>querySelector nos devuelve un solo elementol, el primer elemento que coincida<br>");
parrafo = document.querySelector(".hola");
document.writeln(parrafo);

document.writeln("<br><br>querySelectorAll nos devuelve una lista de elementos que coincidan<br>");
parrafo = document.querySelectorAll(".hola");
document.writeln(parrafo+"<br>");

parrafo = document.querySelectorAll(".hola");
document.writeln(parrafo[0]);

