import { Component, OnInit } from '@angular/core';
import { GruposTareasService } from '../../grupos-tareas.service';

@Component({
  selector: 't-i-tareas-pendientes',
  templateUrl: './i-tareas-pendientes.component.html',
  styleUrls: ['./i-tareas-pendientes.component.css']
})
export class ITareasPendientesComponent implements OnInit {

  listaPendientes = this.gruposTareasService.listaPendientes;

  constructor(private gruposTareasService: GruposTareasService) { }

  ngOnInit() {
  }

}
