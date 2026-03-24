let alto = window.screen.height;
let ancho = window.screen.width;
comprar = confirm(`El alto es ${alto} y el ancho es ${ancho}`);

if(comprar){
    alert("Compra realizada");
}else{
    alert("Compra denegada");
}