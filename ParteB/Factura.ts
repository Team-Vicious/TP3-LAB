import { DetalleFactura } from "./DetalleFactura";

export class Factura {
    letra: string="";
    numero: number= 0;
    recargo: number= 0;
    tipoPago: String = "";
    totalItems: number = 0;
    totalFinal: number = 0;
    fecha: Date;
    detallesfacturas: DetalleFactura[] = [];
    

    constructor(letra: string, numero: number, recargo: number,
        tipoPago: String, fecha: Date) {

        this.letra = letra;
        this.numero = numero;
        this.recargo = recargo;
        if(tipoPago== "E"||"TD"||"TC"||"TR"||"CC"){
        this.tipoPago = tipoPago;}
        else{
            console.log("el tipo de pago no es correcto");
        }
        this.fecha = fecha;       
    }

    calcularTotalItems (): number{
        
        this.totalItems=0;

        this.detallesfacturas.forEach(detalles => {
            this.totalItems += detalles.calcularSubTotal();
        })

        return this.totalItems;
        
    }

    calcularTotalFinal (): number{
        
        this.totalFinal=0;

        this.totalFinal = this.totalItems + this.recargo; 

        return this.totalFinal;
    }


}