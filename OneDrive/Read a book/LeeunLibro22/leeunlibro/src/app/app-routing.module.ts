import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes hechos por nosotros
import { CrearLibroComponent } from './components/crear-libro/crear-libro.component';
import { ListarLibroComponent } from './components/listar-libro/listar-libro.component';



const routes: Routes = [

  { path: '', component:  ListarLibroComponent},
  { path: 'crear-libro', component: CrearLibroComponent},
  { path: 'editar-libro/:id', component: CrearLibroComponent}, // Se edita por el id por eso se debe colocar
  { path: '**', redirectTo: '', pathMatch:'full'} //redireccionar al usuario


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
