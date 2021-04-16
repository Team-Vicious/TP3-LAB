var TestA = /** @class */ (function () {
    function TestA() {
        this.hola = "pachangaaaa";
        this.vehiculo = new Vehiculo("FML 234", "subaru", "impresa wrx");
        this.hojaRuta1 = new HojaRuta(1, new Date("2021-1-5"));
        this.hojaRuta2 = new HojaRuta(2, new Date("2021-2-8"));
        this.hojaRuta3 = new HojaRuta(3, new Date("2021-3-22"));
        this.detalle1 = new Detalle(10, 200, 8, 14, 0, 0);
        this.detalle2 = new Detalle(250, 300, 15, 20, 30, 0);
        this.detalle3 = new Detalle(400, 480, 21, 23, 0, 30);
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
    TestA.prototype.asignar = function () {
        //mostrar
        var mostrar;
        mostrar = ("\n\n===== auto: " + this.vehiculo.marca + " " + this.vehiculo.modelo + " =====\n        \n===== patente: " + this.vehiculo.patente + " =====\n        \n        -----------------------------------------------------------------------\n        ruta N\u00BA" + this.hojaRuta1.numero + " // fecha: " + this.hojaRuta1.fecha + " \n        \nDetalles: \n        \n        " + this.vehiculo.hojaRuta[0].detalles[0].mostrarDetalle() + "\n        \n\n\n        -----------------------------------------------------------------------\n        ruta N\u00BA" + this.hojaRuta2.numero + " // fecha: " + this.hojaRuta2.fecha + " \n        \nDetalles: \n        \n        " + this.vehiculo.hojaRuta[1].detalles[0].mostrarDetalle() + "\n        \n\n\n        -----------------------------------------------------------------------\n        ruta N\u00BA" + this.hojaRuta3.numero + " // fecha:" + this.hojaRuta3.fecha + " \n        \nDetalles: \n        \n        " + this.vehiculo.hojaRuta[2].detalles[0].mostrarDetalle() + "\n        \n\n        -----------------------------------------------------------------------\n        \n");
        console.log(mostrar);
        return mostrar;
    };
    TestA.prototype.pruebaMetodos = function () {
        var mostrar;
        mostrar = ("\t===== Metodo 1 =====\n        \nVehiculo " + this.vehiculo.marca + "----- Hoja Ruta " + this.vehiculo.hojaRuta[0].numero + " // fecha: " + this.vehiculo.hojaRuta[0].fecha + "\n        \nCalcular kilometros recorridos: " + this.vehiculo.hojaRuta[0].calcularTotalKilometros() + "\n        \n\n        \nVehiculo " + this.vehiculo.marca + "----- Hoja Ruta " + this.vehiculo.hojaRuta[1].numero + " // fecha: " + this.vehiculo.hojaRuta[1].fecha + "\n        \nCalcular kilometros recorridos: " + this.vehiculo.hojaRuta[1].calcularTotalKilometros() + "\n        \n\n        \nVehiculo " + this.vehiculo.marca + "----- Hoja Ruta " + this.vehiculo.hojaRuta[2].numero + " // fecha: " + this.vehiculo.hojaRuta[2].fecha + "\n        \nCalcular kilometros recorridos: " + this.vehiculo.hojaRuta[2].calcularTotalKilometros() + "\n        \n\n        \n-----------------------------------------------------------------------\n\n        \n\t===== Metodo 2 =====\n        \nVehiculo 1 ----- km recorridos desde la fecha " + this.hojaRuta1.fecha + " \n                                                \n\t\t\t\t\t\t\t\t\t\thasta " + this.hojaRuta2.fecha + "  \n        \nkilometros: " + this.vehiculo.calcularTotalKilometrosRecorridos(this.hojaRuta1.fecha, this.hojaRuta2.fecha) + "\n        \n\n        \nVehiculo 1 ----- km recorridos desde la fecha " + this.hojaRuta1.fecha + " \n                                                \n\t\t\t\t\t\t\t\t\t\thasta " + this.hojaRuta3.fecha + " \n        \nkilometros: " + this.vehiculo.calcularTotalKilometrosRecorridos(this.hojaRuta1.fecha, this.hojaRuta3.fecha) + "\n        \n\n        ");
        console.log(mostrar);
        return mostrar;
    };
    return TestA;
}());
var Detalle = /** @class */ (function () {
    function Detalle(kmSalida, kmRegreso, horaSalida, horaRegreso, minutoSalida, minutoRegreso) {
        this.kmSalida = kmSalida;
        this.kmRegreso = kmRegreso;
        this.horaSalida = horaSalida;
        this.horaRegreso = horaRegreso;
        this.minutoSalida = minutoSalida;
        this.minutoRegreso = minutoRegreso;
    }
    Detalle.prototype.mostrarDetalle = function () {
        return "\n\tkmSalida: " + this.kmSalida + "\n                \n\tkmRegreso: " + this.kmRegreso + "\n                \n\thoraSalida: " + this.horaSalida + "hs\n                \n\thoraRegreso: " + this.horaRegreso + "hs\n                \n\tminutoSalida: " + this.minutoSalida + " minutos\n                \n\tminutoRegreso: " + this.minutoRegreso + " minutos\n        ";
    };
    return Detalle;
}());
var HojaRuta = /** @class */ (function () {
    function HojaRuta(numero, fecha) {
        this.detalles = [];
        this.numero = numero;
        this.fecha = fecha;
    }
    HojaRuta.prototype.calcularTotalKilometros = function () {
        var totalKilometros = 0;
        this.detalles.forEach(function (detalle) {
            totalKilometros += (detalle.kmRegreso) - (detalle.kmSalida);
        });
        return totalKilometros;
    };
    return HojaRuta;
}());
var Vehiculo = /** @class */ (function () {
    function Vehiculo(patente, marca, modelo) {
        this.hojaRuta = [];
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
    }
    Vehiculo.prototype.calcularTotalKilometrosRecorridos = function (fechaDesde, fechaHasta) {
        var totalKmRecorridos = 0;
        this.hojaRuta.forEach(function (hoja) {
            if (hoja.fecha >= fechaDesde && hoja.fecha <= fechaHasta) {
                totalKmRecorridos += hoja.calcularTotalKilometros();
            }
        });
        return totalKmRecorridos;
    };
    return Vehiculo;
}());
//mostrar todo por consola
var test = new TestA();
var mostrar = test.asignar() + " \n " + test.pruebaMetodos();
document.body.innerHTML = mostrar;
