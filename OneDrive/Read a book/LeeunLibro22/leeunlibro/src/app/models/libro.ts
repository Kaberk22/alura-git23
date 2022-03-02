export class Libro {
_id?: number;
bookname: String;
autor: String;
categoria: String;
numeroHojas: Number;
fechaPublicacion: String;
nombreUsuario: String; 

    constructor(
        bookname: string,
        autor: string,
        categoria: string,
        numeroHojas: number,
        fechaPublicacion: string,
        nombreUsuario: String) {

    this.bookname = bookname;
    this.autor = autor;
    this.categoria = categoria;
    this.numeroHojas = numeroHojas;
    this.fechaPublicacion = fechaPublicacion;
    this.nombreUsuario = nombreUsuario;
    }
}