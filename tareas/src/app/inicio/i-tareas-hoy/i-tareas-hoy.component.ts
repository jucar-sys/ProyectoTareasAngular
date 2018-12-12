import { Component, OnInit } from '@angular/core';

@Component({
  selector: 't-i-tareas-hoy',
  templateUrl: './i-tareas-hoy.component.html',
  styleUrls: ['./i-tareas-hoy.component.css']
})
export class ITareasHoyComponent implements OnInit {

  listaHoy:string[] = ["Hacer tarea", "Terminar nextU", "Acabar App", "Acabar sitio", "Hacer mantenimiento"];

  constructor() { }

  ngOnInit() {
  }

}
