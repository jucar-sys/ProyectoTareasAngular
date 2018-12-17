import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GruposTareasService } from './grupos-tareas.service';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { NuevaTareaComponent } from './nueva-tarea/nueva-tarea.component';
import { VerGrupoComponent } from './ver-grupo/ver-grupo.component';
import { InicioComponent } from './inicio/inicio.component';
import { ITareasPendientesComponent } from './inicio/i-tareas-pendientes/i-tareas-pendientes.component';
import { ITareasHoyComponent } from './inicio/i-tareas-hoy/i-tareas-hoy.component';
import { ITareasGruposComponent } from './inicio/i-tareas-grupos/i-tareas-grupos.component';
import { FechaTareasPipe } from './fecha-tareas.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BarraSuperiorComponent,
    NuevaTareaComponent,
    VerGrupoComponent,
    InicioComponent,
    ITareasPendientesComponent,
    ITareasHoyComponent,
    ITareasGruposComponent,
    FechaTareasPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [GruposTareasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
