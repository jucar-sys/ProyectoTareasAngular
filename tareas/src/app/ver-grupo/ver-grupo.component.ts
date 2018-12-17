import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GruposTareasService } from '../grupos-tareas.service';

@Component({
  selector: 't-ver-grupo',
  templateUrl: './ver-grupo.component.html',
  styleUrls: ['./ver-grupo.component.css']
})
export class VerGrupoComponent implements OnInit {

  nombreGrupo = "";

  constructor(private activatedRoute: ActivatedRoute, private gruposTareasService: GruposTareasService) {
    this.nombreGrupo = this.activatedRoute.snapshot.params['nombre'];
  }

  ngOnInit() {
  }

  //Llenar arreglo con lista según el grupo elegido
  listaTareasGrupo = this.gruposTareasService.tareasGrupo(this.activatedRoute.snapshot.params['nombre']);

}
