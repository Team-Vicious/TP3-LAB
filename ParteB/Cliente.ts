import { Factura } from "./factura";

export class Cliente {
    numero: number= 0;
    razonSocial: string= " ";
    cuit: number= 0;
    facturas: Factura[] = [];

    constructor(numero: number, razonSocial: string, cuit: number) {

        this.numero = numero;
        this.razonSocial = razonSocial;
        this.cuit = cuit;
    }


    public totalFacturadoXTipoPago(tipoPago:string): number{

        let total = 0;

        this.facturas.forEach(factura=>{
            if(factura.tipoPago==tipoPago){
                total += factura.totalFinal;
     
        }});

        return total;
    }
    
}