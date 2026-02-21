let cantidad = prompt("Ingrese la cantidad de alumnos:");
let asistencia = [];

for(i=0; i<cantidad;i++){
    asistencia[i]=[];
    asistencia[i][0] = prompt("Ingresa el nombre del alumno: "+(i+1));
}
let presente2 = 0;
for(i=0; i<cantidad;i++){
    
    for(j=1; j<=31; j++){
        let presente = prompt(`En el día ${j} el alumno ${asistencia[i][0]} estuvo presente P o ausente A`);
        if(presente == "P"){
            asistencia[i][j]=presente;
            presente2++;
        }else if(presente == "A"){
            asistencia[i][j]=presente;
        }

    }
    let estado;
    if(((31-presente2)/presente2)<0.10){
        estado = "Aprobado";
    }else{
        estado = "Reprobado";
    }
    document.writeln(`El alumno ${asistencia[i][0]} tuvo: ${presente2} dias presente y tuvo ${(31-presente2)} dias ausente asi que está ${estado2}<br>`);
    presente2 = 0;
}
