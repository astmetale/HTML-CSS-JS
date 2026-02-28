
let materias = [];
let op = 0;
while(op != 5){
    
    op=parseInt(prompt(`1. Añadir las materias\n2. Registrar los profesores y alumnos de cada materia\n3. Ingresar materia y saber su profesor y alumnos`));
    switch(op){
    case 1:
        alert(`A continuacion llenara las 12 materias`);
        for(i=0; i<=11; i++){
            materias[i]=prompt(`Ingrese el nombre de su materia numero ${(i+1)}`)
        }
        break;
    case 2:
            for(o=0;o<=11;o++){
                materias[o]=[];
                for(i=0;i<1;i++){
                    let prof = prompt(`Para su materia ${materias[o]} indique el nombre de su profesor`);
                    materias[o][i]=prof;
                    for(j=1; i<=5; i++){
                        let alum = prompt(`Ahora indique el alumno numero ${j} en la materia ${materias[i]}`);
                        materias[o][j]=alum;
                    }
                }
            }
        break;
    case 3:
        let mat = prompt(`Ingrese la materia para saber su maestro y el nombre de todos los alumnos`);
        for(i=0;i<=11;i++){
            if(mat == materias[i]){
                for(j=0;j<1;j++){
                    alert(`Su maestro es ${materias[i][j]}`);
                }
                let cadena = ``;
                for(w=1;w<=5;w++){
                    cadena+=`${materias[w]}`;
                }
            }
        }
        break;
    }
}