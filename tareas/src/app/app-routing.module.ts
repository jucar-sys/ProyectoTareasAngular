import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NuevaTareaComponent } from './nueva-tarea/nueva-tarea.component';
import { VerGrupoComponent } from './ver-grupo/ver-grupo.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'nuevaTarea', component: NuevaTareaComponent},
  { path: 'verGrupo/:nombre', component: VerGrupoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

/*@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})*/

export class AppRoutingModule { }
