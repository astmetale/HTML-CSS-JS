let trabajo = "240 minutos de trabajo";
let tp = "100 minutos trabajos practicos";
let estudio = "100 minutos de estudio";
let homework = "30 minnutos de cosas de la casa";
let descanso = "10 minutos de descanso";

console.log("TAREAS");
for(i=0;i<14;i++){
    if(i==0){
        console.group("Semana 1");
    }
    console.groupCollapsed(`DIA ${(i+1)}`);
    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(tp);
    console.log(homework);
    console.groupEnd();
    if(i==7){
        
        console.groupEnd();
        console.group("Semana 2");
        
    }
}

console.groupEnd();
console.groupEnd();

