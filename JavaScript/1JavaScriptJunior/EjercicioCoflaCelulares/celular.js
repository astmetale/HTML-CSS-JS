class Celular{
    constructor(marca, color, peso, rdp, rdc, ram, camaraLenta){
        this.marca=marca;
        this.color=color;
        this.peso = peso;
        this.rdp=rdp;
        this.rdc=rdc;
        this.ram=ram;
        this.camaraLenta=camaraLenta;
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
        return `Foto tomada en una resolucion de: ${this.rdc}`;
    }
    grabarVideo(){
        return `Video tomado en una resolucion de: ${this.rdc}`;
    }
    infoCelular(){
        return `
        <b> Marca: </b> ${this.marca} <br> 
        <b> Color: </b> ${this.color} <br>
        <b>  Peso: </b>  ${this.peso} <br>
        <b> Tamaño de pantalla: </b> ${this.rdp} <br>
        <b> Resolucion de camara: </b> ${this.rdc} <br>
        <b> RAM: ${this.ram} </b> <br>
        <b> Tiene Camara Lenta: </b> ${this.camaraLenta}  <br>
        ${this.tomarFoto()} <br>
        ${this.grabarVideo()} <br>
        <br>
        
        `;

    }
}
class GamaAlta extends Celular{
    constructor(marca,color, peso, rdp, rdc, ram, camaraLenta, reconocimientoFacial, camaraExtra, camaraSuperLenta){
        super(marca,color, peso, rdp, rdc, ram, camaraLenta);
        this.reconocimientoFacial = reconocimientoFacial;
        this.camaraExtra = camaraExtra;
        this.camaraSuperLenta = camaraSuperLenta;
    }
    metReconocimientoFacial(){
        return `Usando reconocimiento facial`;
    }
    metCamaraExtra(){
        return `Usando la camara extra`;
    }
    metCamaraSuperLenta(){
        return `Usando la camara super lenta`;
    }
    infoCelularGamaAlta(){
        return `
        
        <b> Marca: </b> ${this.marca} <br> 
        <b> Color: </b> ${this.color} <br>
        <b>  Peso: </b>  ${this.peso} <br>
        <b> Tamaño de pantalla: </b> ${this.rdp} <br>
        <b> Resolucion de camara: </b> ${this.rdc} <br>
        <b> RAM: </b> ${this.ram}  <br>
        <b> Tiene Camara Lenta: </b> ${this.camaraLenta}  <br>
        <b> Reconocimiento Facial </b>  ${this.reconocimientoFacial} <br>
        <b> Camara Extra </b> ${this.camaraExtra} <br>
        <b> Camara Super Lenta </b>  ${this.camaraSuperLenta}<br>
        ${this.metReconocimientoFacial()} <br>
        ${this.grabarVideo()} <br>
        ${this.tomarFoto()} <br>
        ${this.metCamaraExtra()} <br>
        ${this.metCamaraSuperLenta()} <br>
        <br>
        `;
    }
}

celular1 = new Celular("Sony","rojo","150g","5 pulgadas","Full HD", "2GB", "No tiene");
celularGamaAlta = new GamaAlta("Huawei","Negro","130g","El tamaño es 4.2'","4K","8gb","Cuenta con camara lenta","Cuenta con reconocimiento facial","Si tiene camara extra","Cuenta con camara super lenta");
document.writeln(celular1.infoCelular());
document.writeln(celularGamaAlta.infoCelularGamaAlta());