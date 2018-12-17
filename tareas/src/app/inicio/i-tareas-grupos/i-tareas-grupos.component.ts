import { Component, OnInit } from '@angular/core';
import { GruposTareasService } from '../../grupos-tareas.service';

@Component({
  selector: 't-i-tareas-grupos',
  templateUrl: './i-tareas-grupos.component.html',
  styleUrls: ['./i-tareas-grupos.component.css']
})
export class ITareasGruposComponent implements OnInit {

  listaGrupos= this.gruposTareasService.listaGrupos;//Se toma el valor del objeto declarado en el servicio y se adigna aun objeto del componente

  constructor(private gruposTareasService: GruposTareasService) { }

  ngOnInit() {
  }

  //Funciones para efecto hover en iconos de grupos
  onHoverGroupIn(item){
    item.resaltado = true;
  }

  onHoverGroupOut(item){
    item.resaltado = false;
  }

}
