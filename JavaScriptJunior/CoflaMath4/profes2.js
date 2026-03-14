const cantMaterias = 2;
let cant = 0;
const profesores = 2;
let materias = [];
let op;
while(op!=6){
    op = parseInt(prompt(`MENU DE OPCIONES\n1.- Registrar materias y profesores\n2.- Ingresar alumnos\n3.- Saber en cuantas clases esta Cofla\n4.- Consultar alumnos y profesores con su materia\n5.- Cofla en que materia te quieres escribir\n6.- Salir`));
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
            if(materias.length===2){
            let b = `Ingrese el nombre de su materia para ingresar los alumnos.\nLas materias registradas son:\n`;
            for(i=0;i<cantMaterias;i++){
                b+=`Materia: ${materias[i].nombre} y profesor: ${materias[i].profesor}\n`;
            }
            let a = prompt(b);
            for(i=0;i<2;i++){
                if(materias[i].nombre == a){
                    // almacenar los alumnos en un arreglo en lugar de una cadena
                    let alumnos = [];
                    for(j=0;j<4;j++){
                        alumnos.push(prompt(`Ingrese el nombre de su estudiante numero ${(j+1)}`));
                    }
                    let desicion = prompt(`Deseas agregar el quinto alumno?`);
                    if(desicion==`Si`){
                        alumnos.push(prompt(`Ingrese el nombre de su ultimo estudiante`));
                    }else{
                        alert(`El espacio no sera utilizado`);
                    }
                    materias[i].alumnos = alumnos;
                    cant++;
                }
            }
            }else{
                    alert("Primero debe usar la opcion 1");
                }
            break;
        case 3:
            if(materias.length===2){
                let resultado = "";
                for(i=0;i<cantMaterias;i++){
                    let alum = materias[i].alumnos;
                    if(Array.isArray(alum)){
                        for(let nombre of alum){
                            if(nombre && nombre.toLowerCase().includes("cofla")){
                                resultado += `Cofla aparece en la materia ${materias[i].nombre} con el profesor ${materias[i].profesor}\n`;
                                break; // no hace falta seguir revisando esta materia
                            }
                        }
                    }
                }
                if(resultado === ""){
                    alert("Cofla no está registrado en ninguna clase");
                } else {
                    alert(resultado);
                }
            }else{
                    alert("Primero debe usar la opcion 1");
                }
            break;
        case 4:
            let cadena = "";
                if(materias.length===2){
                    for(i=0;i<cant;i++){
                        let name = materias[i];
                        cadena=(`El nombre de la materia es ${name.nombre} y su profesor es ${name.profesor}\n`);
                        let cantAlumnos = parseInt(materias[i].alumnos.length);
                        for(j=0;j<cantAlumnos;j++){
                            cadena+=`${name.alumnos[j]}\n`;
                        }

                    }
                    alert(cadena);
                }else{
                    alert("Primero debe usar la opcion 1");
                }
            break;
        case 5:
            if(materias.length===2){
                for(i=0;i<cantMaterias;i++){
                    if(materias[i].alumnos.length < 5){
                        let nombreCofla = prompt(`Ingrese el nombre de Cofla`);
                        materias[i].alumnos.push(nombreCofla);
                        break;
                    }else{
                        alert(`En la materia ${materias[i].nombre} no hay lugar ya`);
                    }
                }
            }else{
                alert("Primero debe usar la opcion 1");
            }
            break;
    }
}