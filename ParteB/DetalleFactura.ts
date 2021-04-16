import { Articulo } from "./articulo";

export class DetalleFactura {
    cantidad: number=0;
    subtotal: number=0;
    articulo: Articulo;

    constructor(cantidad: number, articulo: Articulo) {

        this.cantidad = cantidad;
        this.articulo = articulo;
        this.subtotal = this.calcularSubTotal();
    }   

    public calcularSubTotal(): number{ 

        this.subtotal = this.cantidad*this.articulo.precio;   

        return this.subtotal;
    } 

}