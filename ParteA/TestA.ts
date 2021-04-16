class TestA {
    
    vehiculo: Vehiculo;

    hojaRuta1: HojaRuta;
    

    hojaRuta2: HojaRuta;
    
    hojaRuta3: HojaRuta;

    detalle1: Detalle;
    
    detalle2: Detalle;

    detalle3: Detalle;

    constructor(){

        this.vehiculo = new Vehiculo("FML 234","subaru","impresa wrx");

        this.hojaRuta1 = new HojaRuta(1, new Date("2021-1-5"));
        this.hojaRuta2 = new HojaRuta(2, new Date("2021-2-8"));
        this.hojaRuta3 = new HojaRuta(3, new Date("2021-3-22"));

        this.detalle1 = new Detalle(10,200,8,14,0,0);
        this.detalle2 = new Detalle(250,300,15,20,30,0);
        this.detalle3= new Detalle(400,480,21,23,0,30);


        //trabajar solo con ruta hoja ruta 1 y se le pasan los detalles de las 3 rutas
        this.hojaRuta1.detalles.push(this.detalle1);
        this.hojaRuta2.detalles.push(this.detalle2);
        this.hojaRuta3.detalles.push(this.detalle3);

        //mismo vehiculo hace todas las hojaRutas
        this.vehiculo.hojaRuta.push(this.hojaRuta1);
        this.vehiculo.hojaRuta.push(this.hojaRuta2);
        this.vehiculo.hojaRuta.push(this.hojaRuta3);
        
    }
   
    //asignacion
    //vehiculo.hojaRuta.push(hojaRuta1);
    asignar(){

        //mostrar
        let mostrar: String;
        mostrar =(`\n\n===== auto: ${this.vehiculo.marca} ${this.vehiculo.modelo} =====
        \n===== patente: ${this.vehiculo.patente} =====
        
        -----------------------------------------------------------------------
        ruta Nº${this.hojaRuta1.numero} // fecha: ${this.hojaRuta1.fecha} 
        \nDetalles: 
        
        ${this.vehiculo.hojaRuta[0].detalles[0].mostrarDetalle()}
        \n

        -----------------------------------------------------------------------
        ruta Nº${this.hojaRuta2.numero} // fecha: ${this.hojaRuta2.fecha} 
        \nDetalles: 
        
        ${this.vehiculo.hojaRuta[1].detalles[0].mostrarDetalle()}
        \n

        -----------------------------------------------------------------------
        ruta Nº${this.hojaRuta3.numero} // fecha:${this.hojaRuta3.fecha} 
        \nDetalles: 
        
        ${this.vehiculo.hojaRuta[2].detalles[0].mostrarDetalle()}
        \n
        -----------------------------------------------------------------------
        \n`);
        console.log(mostrar);   
        return mostrar;      
        
        
    }


    pruebaMetodos(){

        let mostrar: String;
        mostrar = (`\t===== Metodo 1 =====
        \nVehiculo ${this.vehiculo.marca}----- Hoja Ruta ${this.vehiculo.hojaRuta[0].numero} // fecha: ${this.vehiculo.hojaRuta[0].fecha}
        \nCalcular kilometros recorridos: ${this.vehiculo.hojaRuta[0].calcularTotalKilometros()}
        \n
        \nVehiculo ${this.vehiculo.marca}----- Hoja Ruta ${this.vehiculo.hojaRuta[1].numero} // fecha: ${this.vehiculo.hojaRuta[1].fecha}
        \nCalcular kilometros recorridos: ${this.vehiculo.hojaRuta[1].calcularTotalKilometros()}
        \n
        \nVehiculo ${this.vehiculo.marca}----- Hoja Ruta ${this.vehiculo.hojaRuta[2].numero} // fecha: ${this.vehiculo.hojaRuta[2].fecha}
        \nCalcular kilometros recorridos: ${this.vehiculo.hojaRuta[2].calcularTotalKilometros()}
        \n
        \n-----------------------------------------------------------------------

        \n\t===== Metodo 2 =====
        \nVehiculo 1 ----- km recorridos desde la fecha ${this.hojaRuta1.fecha} 
                                                \n\t\t\t\t\t\t\t\t\t\thasta ${this.hojaRuta2.fecha}  
        \nkilometros: ${this.vehiculo.calcularTotalKilometrosRecorridos(this.hojaRuta1.fecha,this.hojaRuta2.fecha)}
        \n
        \nVehiculo 1 ----- km recorridos desde la fecha ${this.hojaRuta1.fecha} 
                                                \n\t\t\t\t\t\t\t\t\t\thasta ${this.hojaRuta3.fecha} 
        \nkilometros: ${this.vehiculo.calcularTotalKilometrosRecorridos(this.hojaRuta1.fecha,this.hojaRuta3.fecha)}
        \n
        `); 
        console.log(mostrar);   
        return mostrar  


    }

    
    
    hola: string="pachangaaaa";
}

class Detalle{
    kmSalida: number;
    kmRegreso: number;
    horaSalida: number;
    horaRegreso: number;
    minutoSalida: number;
    minutoRegreso: number;


    constructor(kmSalida: number, kmRegreso: number, horaSalida: number, horaRegreso: number, minutoSalida: number, minutoRegreso: number ){

        this.kmSalida = kmSalida;
        this.kmRegreso = kmRegreso;
        this.horaSalida = horaSalida;
        this.horaRegreso = horaRegreso;
        this.minutoSalida = minutoSalida;
        this.minutoRegreso = minutoRegreso;

    }

    mostrarDetalle(){
        return `\n\tkmSalida: ${this.kmSalida}
                \n\tkmRegreso: ${this.kmRegreso}
                \n\thoraSalida: ${this.horaSalida}hs
                \n\thoraRegreso: ${this.horaRegreso}hs
                \n\tminutoSalida: ${this.minutoSalida} minutos
                \n\tminutoRegreso: ${this.minutoRegreso} minutos
        `;
    }
}

class HojaRuta{
    fecha: Date;
    numero: number;
    detalles: Detalle[] = [];



    constructor(numero: number, fecha : Date){

        this.numero = numero;
        this.fecha = fecha;
        
    }

    calcularTotalKilometros(){
        let totalKilometros: number = 0;
        this.detalles.forEach(detalle => {
        totalKilometros += (detalle.kmRegreso) - (detalle.kmSalida);
        });
        return totalKilometros;
    }

}

class Vehiculo{
    patente: string;
    marca: string;
    modelo: string;
    hojaRuta: HojaRuta[] = [];

    constructor(patente: string, marca: string, modelo: string){

        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;

    }


    calcularTotalKilometrosRecorridos (fechaDesde: Date, fechaHasta: Date ){

        let totalKmRecorridos: number = 0;

        this.hojaRuta.forEach(hoja =>{
            if (hoja.fecha >= fechaDesde && hoja.fecha <= fechaHasta) {
                totalKmRecorridos += hoja.calcularTotalKilometros();
                
            }
        });
        
        return totalKmRecorridos;
    }

}

//mostrar todo por consola
let test: TestA = new TestA();
let mostrar:string=`${test.asignar()} \n ${test.pruebaMetodos()}`;


document.body.innerHTML = mostrar;