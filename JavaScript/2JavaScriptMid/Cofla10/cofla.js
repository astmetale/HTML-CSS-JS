
    const sendButton = document.getElementById("snd-nota");
    sendButton.addEventListener("click", () => {
        let resultado, mensaje;
        try {
            let prevRes = parseInt(document.getElementById("nota").value);
            if (isNaN(prevRes)) {
                throw "Gracioso";
            }
            mensaje = definirMensaje(prevRes);
            resultado = verificarAprobacion(8,5,prevRes);

        } catch (e) {
            resultado = "Error";
            mensaje = "He descubierto que intentaste hackear el sitio";
        }
        abrirModal(resultado, mensaje);
    });
const abrirModal = (res, msg) => {
    console.log(res);
    console.log(msg);
}
function definirMensaje(pr){
    let resultado;
    switch(pr){
        case 1: 
            resultado = "Te pasas de lanza";
        break;
        case 2: 
            resultado = "Eres malisimo en la materia";
        break;
        case 3: 
            resultado = "No sabes casi nada";
        break;
        case 4: 
            resultado = "Muy mal";
        break;
        case 5: 
            resultado = "Mal";
        break;
        case 6: 
            resultado = "Regular";
        break;
        case 7: 
            resultado = "Bien pero puede mejorar";
        break;
        case 8: 
            resultado = "Muy Bien";
        break;
        case 9: 
            resultado = "Excelente";
        break;
        case 10: 
            resultado = "Insuperable";
        break;
        default: resultado = null;
    }
    return resultado;
}

function verificarAprobacion(nota1,nota2,prevRes){
    promedio = (nota1 + nota2 + prevRes);
    if(promedio>=7){
        let resultado = "<p class=`green`>APROBADO</p>"
    }
}