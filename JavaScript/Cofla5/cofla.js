const materias = {
    fisica: [90,6,3, "fisica"],
    matematicas: [85,8,2,"matematicas"], 
    logica:[65,5,1,"logica"],
    quimica:[93,8,4,"quimica"],
    calculo:[91,6,3,"calculo"],
    programacion:[79,7,4,"programacion"],
    biologia:[75,9,2,"biologia"],
    bbdd:[98,9,1,"bbdd"],
    algebra:[100,10,4,"algebra"]
}

const asistencia=()=>{
    for(materia in materias){
        let asistencias = materias[materia][0];
        if(asistencias>=90){
            console.log(materias[materia][3]);
            console.log("%cAprobado","color:green");
        }else{
            console.log(materias[materia][3]);
            console.log(`%cReprobado`,`color:red`);
        }
    }
} 
asistencia();