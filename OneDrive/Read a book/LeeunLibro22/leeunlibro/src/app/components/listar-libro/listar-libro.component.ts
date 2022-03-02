import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Libro } from 'src/app/models/libro';
import { LibroService } from '../../services/libro.service';



@Component({
  selector: 'app-listar-libro',
  templateUrl: './listar-libro.component.html',
  styleUrls: ['./listar-libro.component.css']
})
export class ListarLibroComponent implements OnInit {
  listLibros: Libro[] = [];

  constructor(private _libroService: LibroService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerLibros();
  }

  obtenerLibros() {

    this._libroService.getlibros().subscribe(data => {
      console.log(data);
      this.listLibros = data;
    }, error => {
      console.log(error);
    })
  
  }

  eliminarLibro(id: any) {

    this._libroService.eliminarLibros(id).subscribe(data => {
      this.toastr.error("este libro fue eliminado con exito", "libro eliminado");
      this.obtenerLibros();
    }, error => {
      console.log(error);
    })
  }
}