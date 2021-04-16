export class Articulo {
    codigo: number=0;
    denominacion: string=" ";
    precio: number=0;
    unidadMedida: String=" ";

    constructor(codigo: number, denominacion: string, precio: number, unidadMedida: String) {

        this.codigo = codigo;
        this.denominacion = denominacion;
        this.precio = precio;
        this.unidadMedida = unidadMedida;
    }
}