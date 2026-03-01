const cantMaterias = 2;
const profesores = 2;
let materias = [];
let op;
while(op!=4){
    op = parseInt(prompt(`MENU DE OPCIONES\n1.- Registrar las 12 materias\n2.- Registrar profesores\n3.-Ingresar alumnos\n4.- Salir`));
    switch(op){
        case 1:
            if(materias.length!=2){
                for(i=0;i<cantMaterias;i++){
                    let materia = prompt(`Ingrese el nombre de su materia numero ${(i+1)}`);
                    let profe = prompt(`Ingrese el nombre del profesor de la materia ${materia}`);
                    materias[i] = {nombre: materia, profesor:profe, alumnos: null};
                }
            }else{
                alert("Ya ha registrado sus materias previamente");
            }
                
            break;
        case 2:
            let cadena = "";
                if(materias.length===2){
                    for(i=0;i<cantMaterias;i++){
                        let name = materias[i];
                        cadena+=(`El nombre de la materia es ${name.nombre} y su profesor es ${name.profesor}\n`);
                    }
                    alert(`${cadena}`);
                }else{
                    alert("Primero debe usar la opcion 1");
                }
            break;
        case 3:
            if(materias.length===2){
            let b = `Ingrese el nombre de su materia para ingresar los alumnos.\nLas materias registradas son:\n`;
            for(i=0;i<2;i++){
                b+=`Materia: ${materias[i].nombre} y profesor: ${materias[i].profesor}`;
            }
            let a = prompt(b);
            for(i=0;i<2;i++){
                if(materias[i].nombre == a){
                    let temporal = "Los estudiantes son:\n";
                    for(j=0;j<5;j++){
                        temporal+=prompt(`Ingrese el nombre de su estudiante numero ${(j+1)}`);
                    }
                    materias[i].alumnos = temporal;
                }
            }
            }else{
                    alert("Primero debe usar la opcion 1");
                }
            break;
    }
}