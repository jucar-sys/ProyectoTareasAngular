import { Component, OnInit } from '@angular/core';
import { GruposTareasService } from '../../grupos-tareas.service';

@Component({
  selector: 't-i-tareas-hoy',
  templateUrl: './i-tareas-hoy.component.html',
  styleUrls: ['./i-tareas-hoy.component.css']
})
export class ITareasHoyComponent implements OnInit {

  listaHoy = this.gruposTareasService.fechaTarea();

  constructor(private gruposTareasService: GruposTareasService) { }

  ngOnInit() {
  }

}
