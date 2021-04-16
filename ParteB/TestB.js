"use strict";
exports.__esModule = true;

var TestB = /** @class */ (function () {
    function TestB() {
        this.articulo1 = new Articulo(123, "acondicionador", 400, "litros");
        this.articulo2 = new Articulo(124, "leche", 150, "litros");
        this.articulo3 = new Articulo(125, "carne", 800, "kilos");
        this.articulo4 = new Articulo(126, "cereales", 570, "kilos");
        this.articulo5 = new Articulo(127, "gaseosa", 220, "litros");
        this.cliente = new Cliente(1, "Joaquin", 20431520460);
        this.factura1 = new Factura("A", 1, 200, "E", new Date("2021-1-5"));
        this.factura2 = new Factura("B", 2, 300, "E", new Date("2021-1-24"));
        this.factura3 = new Factura("C", 3, 350, "TD", new Date("2021-1-30"));
        this.detalleFactura1 = new DetalleFactura(3, this.articulo1);
        this.detalleFactura2 = new DetalleFactura(2, this.articulo2);
        this.detalleFactura3 = new DetalleFactura(2, this.articulo3);
        this.detalleFactura4 = new DetalleFactura(4, this.articulo4);
        this.detalleFactura5 = new DetalleFactura(1, this.articulo5);
        this.detalleFactura6 = new DetalleFactura(5, this.articulo2);
        this.detalleFactura7 = new DetalleFactura(2, this.articulo3);

        this.cliente.facturas.push(this.factura1);
        this.cliente.facturas.push(this.factura2);
        this.cliente.facturas.push(this.factura3);

        this.factura1.detallesfacturas.push(this.detalleFactura1);
        this.factura1.detallesfacturas.push(this.detalleFactura2);
        this.factura2.detallesfacturas.push(this.detalleFactura3);
        this.factura2.detallesfacturas.push(this.detalleFactura4);
        this.factura2.detallesfacturas.push(this.detalleFactura5);
        this.factura3.detallesfacturas.push(this.detalleFactura6);
        this.factura3.detallesfacturas.push(this.detalleFactura7);

        this.factura1.calcularTotalItems();
        this.factura2.calcularTotalItems();
        this.factura3.calcularTotalItems();
        this.factura1.calcularTotalFinal();
        this.factura2.calcularTotalFinal();
        this.factura3.calcularTotalFinal();
    }
    TestB.prototype.pruebaMetodos = function () {
        var mostrar;
        mostrar = (" \t===== PRUEBA DE METODOS =====   \n        \n-------1- Total items de la factura " + this.factura1.numero + " es: " + this.factura1.calcularTotalItems() + "\n        \n-------1- Total items de la factura " + this.factura2.numero + " es: " + this.factura2.calcularTotalItems() + "\n        \n-------1- Total items de la factura " + this.factura3.numero + " es: " + this.factura3.calcularTotalItems() + "\n        \n-------2- Total final de la factura " + this.factura1.numero + " es: " + this.factura1.calcularTotalFinal() + "\n        \n-------2- Total final de la factura " + this.factura2.numero + " es: " + this.factura2.calcularTotalFinal() + "\n        \n-------2- Total final de la factura " + this.factura3.numero + " es: " + this.factura3.calcularTotalFinal() + "\n        \n-------3- Subtotal del detalle de factura 1 es: " + this.detalleFactura1.calcularSubTotal() + " \n        \n-------3- Subtotal del detalle de factura 2 es: " + this.detalleFactura2.calcularSubTotal() + " \n        \n-------3- Subtotal del detalle de factura 3 es: " + this.detalleFactura3.calcularSubTotal() + " \n        \n-------3- Subtotal del detalle de factura 4 es: " + this.detalleFactura4.calcularSubTotal() + " \n        \n-------3- Subtotal del detalle de factura 5 es: " + this.detalleFactura5.calcularSubTotal() + " \n        \n-------3- Subtotal del detalle de factura 6 es: " + this.detalleFactura6.calcularSubTotal() + " \n        \n-------3- Subtotal del detalle de factura 7 es: " + this.detalleFactura7.calcularSubTotal() + " \n        \n-------4- forma de pago Efectivo del cliente: " + this.cliente.razonSocial + " igual a: " + this.cliente.totalFacturadoXTipoPago("E") + "\n        \n-------4- forma de pago Tarjeta de Credito  del cliente: " + this.cliente.razonSocial + " igual a: " + this.cliente.totalFacturadoXTipoPago("TC") + "\n        \n-------4- forma de pago Tarjeta de Debito del cliente: " + this.cliente.razonSocial + " igual a: " + this.cliente.totalFacturadoXTipoPago("TD") + "\n        \n-------4- forma de pago Cuenta Corriente del cliente: " + this.cliente.razonSocial + " igual a: " + this.cliente.totalFacturadoXTipoPago("CC") + "\n        \n-------4- forma de pago Transferencia del cliente: " + this.cliente.razonSocial + " igual a: " + this.cliente.totalFacturadoXTipoPago("TR"));
        console.log(mostrar);
        return mostrar;
    };
    return TestB;
}());
var test = new TestB();
var mostrar = "" + test.pruebaMetodos();
document.body.innerHTML = mostrar;
