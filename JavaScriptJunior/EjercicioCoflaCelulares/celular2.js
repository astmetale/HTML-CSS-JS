class Celular{
    constructor(color, peso, rdp, rdc, ram){
        this.color=color;
        this.peso = peso;
        this.rdp=rdp;
        this.rdc=rdc;
        this.ram=ram;
        this.encendido=false;
    }
    prender(){
        if(this.encendido==false){
            alert("Celular prendido");
            this.encendido=true;
        }else{
            alert("Celular apagado");
            this.encendido=false;
        }
    }
    reiniciar(){
        if(this.encendido==true){
            alert("El celular se está reiniciando");
        }else{
            alert("El celular está apagado debe encenderlo primero");
        }
    }
    tomarFoto(){
        alert(`Foto tomada en una resolucion de: ${this.rdc}`)
    }
    grabarVideo(){
        alert(`Video tomado en una resolucion de: ${this.rdc}`)
    }
}

celular1 = new Celular("rojo","150g","5 pulgadas","Full HD", "2GB");

celular1.prender();
celular1.tomarFoto();
celular1.grabarVideo();
celular1.reiniciar();
celular1.prender();

