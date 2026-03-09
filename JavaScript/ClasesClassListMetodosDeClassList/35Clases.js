let titulo = document.querySelector(".titulo");
titulo.classList.add("grande");
let valor = titulo.classList.item(1);
document.writeln(valor);
valor=titulo.classList.contains("grande");
document.writeln(valor);

titulo.classList.toggle("grandee",true);
titulo.classList.replace("grandee","chico");x
