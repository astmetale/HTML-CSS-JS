// contenteditable indica si el elemento puede ser modificable por el usuario (bool)
let t = document.querySelector(".titulo");
t.setAttribute("contentEditable","true");

t = document.querySelector(".subtitulo");
t.setAttribute("dir","rtl");
// Mientras este definida no importa si es false o true va a ocultarse
t = document.querySelector(".oculto ");
t.setAttribute("hidden","true");