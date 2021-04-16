"use strict";
exports.__esModule = true;
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(numero, razonSocial, cuit) {
        this.numero = 0;
        this.razonSocial = " ";
        this.cuit = 0;
        this.facturas = [];
        this.numero = numero;
        this.razonSocial = razonSocial;
        this.cuit = cuit;
    }
    Cliente.prototype.totalFacturadoXTipoPago = function (tipoPago) {
        var total = 0;
        this.facturas.forEach(function (factura) {
            if (factura.tipoPago == tipoPago) {
                total += factura.totalFinal;
            }
        });
        return total;
    };
    return Cliente;
}());
exports.Cliente = Cliente;
