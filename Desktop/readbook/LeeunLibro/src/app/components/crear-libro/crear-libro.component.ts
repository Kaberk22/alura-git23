import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Libro } from '../../models/libro';
import { LibroService } from '../../services/libro.service';

 
@Component({
  selector: 'app-crear-libro',
  templateUrl: './crear-libro.component.html',
  styleUrls: ['./crear-libro.component.css']
})
export class CrearLibroComponent implements OnInit {
  libroForm: FormGroup;
  titulo = 'Crear Libro';
  id: string | null;

  constructor(private fb: FormBuilder, private router:Router, private toastr:ToastrService, 
    private _libroService: LibroService, private aRouter: ActivatedRoute) {
    
    this.libroForm = this.fb.group ({
      bookname:['', Validators.required],
      autor:['', Validators.required],
      categoria:['', Validators.required],
      numeroHojas:['', Validators.required],
      fechaPublicacion:['', Validators.required],
      nombreUsuario:['', Validators.required],
    })
 this.id = this.aRouter.snapshot.paramMap.get('id');

}

  ngOnInit(): void {
    this.enEditar();
  }
  agregarLibro(){
    
    const LIBRO: Libro = {

      bookname: this.libroForm.get('bookname')?.value, 
      autor: this.libroForm.get('autor')?.value,
      categoria: this.libroForm.get('categoria')?.value,
      numeroHojas: this.libroForm.get('numeroHojas')?.value,
      fechaPublicacion: this.libroForm.get('fechaPublicacion')?.value,
      nombreUsuario: this.libroForm.get('nombreUsuario')?.value,
    }

if (this.id !== null){
  //aca se edita libro
  this._libroService.editarLibro(this.id, LIBRO).subscribe(data =>{
    this.toastr.success('El libro se actualizó con exito', 'Libro actualizado');
      this.router.navigate(['/']);
  }, error => {
    console.log(error);
    this.libroForm.reset();
  })

}else{
  // agregar libro
  console.log(LIBRO);
    this._libroService.guardarLibros(LIBRO).subscribe(data => {
      this.toastr.success('Libro agregado con exito', 'bienvenido a nuestro mundo');
      this.router.navigate(['/']);
    }, error => {
    console.log(error);
    this.libroForm.reset();
    })
  }
}

  enEditar(){
if (this.id !== null){
  this.titulo = 'Editar Libro';
  this._libroService.obtenerLibro(this.id).subscribe(data =>{
    this.libroForm.setValue({
      bookname: data.bookname,
      autor: data.autor,
      categoria: data.categoria,
      numeroHojas: data.numeroHojas,
      fechaPublicacion: data.fechaPublicacion,
      nombreUsuario: data.nombreUsuario,
        })
      })
    }
  }
}
    
