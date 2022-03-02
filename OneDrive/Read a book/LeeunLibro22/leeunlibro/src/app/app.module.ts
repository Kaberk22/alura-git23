import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearLibroComponent } from './components/crear-libro/crear-libro.component';
import { ListarLibroComponent } from './components/listar-libro/listar-libro.component';
//revisar este modulo cuando se borra la carpeta que se cree por error. 

@NgModule({
  declarations: [
    AppComponent,
    CrearLibroComponent,
    ListarLibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
   



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
