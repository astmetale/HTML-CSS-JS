document.addEventListener("DOMContentLoaded", () => {
    const sendButton = document.getElementById("snd-nota");
    
    sendButton.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("🔥 Click detectado");
        
        let resultado, mensaje;
        
        try {
            let notaInput = document.getElementById("nota").value.trim();
            
            if (!notaInput) {
                throw new Error("Campo vacío");
            }
            
            let prevRes = parseInt(notaInput);
            
            if (Number.isNaN(prevRes) || prevRes < 0 || prevRes > 10) {
                throw new Error("Nota debe ser 0-10");
            }
            
            // Calcular resultado y mensaje
            let verificacion = verificarAprobacion(8, 5, prevRes);
            resultado = verificacion[0];  // HTML (Aprobado/Reprobado)
            mensaje = definirMensaje(prevRes);  // Mensaje descriptivo
            
        } catch (e) {
            console.log("Error:", e.message);
            resultado = "<p class='red'>ERROR</p>";
            mensaje = e.message || "Error desconocido";
        }
        
        abrirModal(resultado, mensaje);
    });
});

function definirMensaje(nota) {
    console.log("Definir mensaje para:", nota);
    switch (nota) {
        case 1: return "Te pasas de lanza";
        case 2: return "Eres malísimo en la materia";
        case 3: return "No sabes casi nada";
        case 4: return "Muy mal";
        case 5: return "Mal";
        case 6: return "Regular";
        case 7: return "Bien pero puede mejorar";
        case 8: return "Muy Bien";
        case 9: return "Excelente";
        case 10: return "Insuperable";
        default: return "Nota no válida";
    }
}

function verificarAprobacion(nota1, nota2, notaNueva) {
    console.log("Verificar:", {nota1, nota2, notaNueva});
    let promedio = ((nota1 + nota2 + notaNueva) / 3);
    
    if (promedio >= 7) {
        return ["<p class='green'>APROBADO</p>", Math.round(promedio * 10) / 10];
    }
    return ["<p class='red'>DESAPROBADO</p>", Math.round(promedio * 10) / 10];
}

function abrirModal(res, msg) {
    console.log("Abrir modal:", res, msg);
    document.querySelector(".resultado").innerHTML = res;
    document.querySelector(".mensaje").innerHTML = "Tu nota: " + msg;
    
    let modal = document.querySelector(".modal-background");
    modal.style.display = "flex";
    modal.style.animation = "aparecer 0.5s forwards";
}

function cerrarModal() {
    document.querySelector(".modal-background").style.display = "none";
}