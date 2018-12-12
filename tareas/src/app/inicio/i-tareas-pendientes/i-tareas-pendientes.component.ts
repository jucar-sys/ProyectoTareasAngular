import { Component, OnInit } from '@angular/core';

@Component({
  selector: 't-i-tareas-pendientes',
  templateUrl: './i-tareas-pendientes.component.html',
  styleUrls: ['./i-tareas-pendientes.component.css']
})
export class ITareasPendientesComponent implements OnInit {

  listaPendientes:string[] = ["Hacer tarea", "Terminar nextU", "Acabar App", "Acabar sitio", "Hacer mantenimiento"];

  constructor() { }

  ngOnInit() {
  }

}
