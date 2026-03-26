const subirCalificaciones = document.getElementById("subirCalificaciones");
subirCalificaciones.addEventListener("click", ()=>{
    const calificacion = document.getElementById("subirCalificaciones");
    if(calificacion.textContent >= 10){
        alert("Numnero real");
    }else if(calificacion.textContent > 10){
        alert("Debe llenar un numeo fijo");
    }else{
        alert("Se introdujo un numero no correcto");
    }
});