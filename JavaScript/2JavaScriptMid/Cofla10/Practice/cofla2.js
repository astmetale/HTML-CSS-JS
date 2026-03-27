const subirCalificaciones = document.getElementById("subirCalificaciones");
let op = document.getElementById("opciones");
subirCalificaciones.addEventListener("click", (e)=>{
    const calificacion = document.getElementById("calificacion");
    e.preventDefault();
    let res = calificacion.value;
    let sw;
    if(res <= 10){
        let parrafo = document.getElementById("parrafo");
        if(res > 7){
            parrafo.style="color: green;";
            parrafo.innerHTML = "Aprobaste";
            res = parseInt(res);
            mensaje(res);
        }else if(res<7){
            parrafo.style="color: red;";
            parrafo.innerHTML = "Reprobaste";
            res = parseInt(res);
            mensaje(res);
        }
    }else if(res > 10){
        alert("Debe llenar un numeo mas pequeño de o igual a 10");
    }
});
function mensaje(numero){
    switch(numero){
        case 1: 
        op.style="color: red;"
            op.innerHTML="Estás en lo mas bajo, sacaste un 1";
        break;
        case 2: 
            op.style="color: red;"
            op.innerHTML="Lo mismo solo que ahora, sacaste un 2";
        break;
        case 3: 
            op.style="color: red;"
            op.innerHTML="Esta vez sacaste un 3";
        break;
        case 4: 
            op.style="color: red;"
            op.innerHTML="Bueno pudiste subir a 4";
        break;
        case 5: 
            op.style="color: red;"
            op.innerHTML="Bueno estás a la mitad";
        break;
        case 6: 
            op.style="color: yellow;"
            op.innerHTML="Estás acercandote ya tienes 6";
        break;
        case 7: 
            op.style="color: yellow;"
            op.innerHTML="Cada vez te acercas mas, ya tienes 7";
        break;
        case 8: 
            op.style="color: green;"
            op.innerHTML="Bien, ya tienes 8";
        break;
        case 9: 
            op.style="color: green;"
            op.innerHTML="Excelente tienes 9 ya estás casi en el top";
        break;
        case 10: 
            op.style="color: blue;"
            op.innerHTML="Bravo. tuviste la maxima calificacion!";
        break;
        default:
            alert("Dato incorrecto");
    }
}