"use strict";
exports.__esModule = true;
exports.Factura = void 0;
var Factura = /** @class */ (function () {
    function Factura(letra, numero, recargo, tipoPago, fecha) {
        this.letra = "";
        this.numero = 0;
        this.recargo = 0;
        this.tipoPago = "";
        this.totalItems = 0;
        this.totalFinal = 0;
        this.detallesfacturas = [];
        this.letra = letra;
        this.numero = numero;
        this.recargo = recargo;
        if (tipoPago == "E" || "TD" || "TC" || "TR" || "CC") {
            this.tipoPago = tipoPago;
        }
        else {
            console.log("el tipo de pago no es correcto");
        }
        this.fecha = fecha;
    }
    Factura.prototype.calcularTotalItems = function () {
        var _this = this;
        this.totalItems = 0;
        this.detallesfacturas.forEach(function (detalles) {
            _this.totalItems += detalles.calcularSubTotal();
        });
        return this.totalItems;
    };
    Factura.prototype.calcularTotalFinal = function () {
        this.totalFinal = 0;
        this.totalFinal = this.totalItems + this.recargo;
        return this.totalFinal;
    };
    return Factura;
}());
exports.Factura = Factura;
