import { Component, OnInit } from '@angular/core';

@Component({
  selector: 't-i-tareas-grupos',
  templateUrl: './i-tareas-grupos.component.html',
  styleUrls: ['./i-tareas-grupos.component.css']
})
export class ITareasGruposComponent implements OnInit {

  //Array de objetos para almacenar los grupos
  listaGrupos=[
    {
      nombre: "Grupo 1",
      icono: "android",
      resaltado: false
    },

    {
      nombre: "Grupo 2",
      icono: "android",
      resaltado: false
    },

    {
      nombre: "Grupo 3",
      icono: "android",
      resaltado: false
    }

  ];

  constructor() { }

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
