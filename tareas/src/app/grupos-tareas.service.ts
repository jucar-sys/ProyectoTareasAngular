import { Injectable } from '@angular/core';

@Injectable()
export class GruposTareasService {

  //////////////////////////////////////////////////

  //Array de objetos para almacenar los grupos (se movio del componente a este servicio)
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


//////////////////////////////////////////////////

  //Array de objetos para tareas pendientes
  listaPendientes=[
    {
      titulo: "Hacer tareas pendientes NU",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      fecha: "2018/12/25",
      grupo: "Grupo 1"
    },
    {
      titulo: "Lavar auto",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      fecha: "2018/12/18",
      grupo: "Grupo 2"
    },
    {
      titulo: "Lavar ropa",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      fecha: "2018/12/08",
      grupo: "Grupo 3"
    },
    {
      titulo: "Terminar práctica",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      fecha: "2018/12/17",
      grupo: "Grupo 3"
    },
    {
      titulo: "Hacer tarea",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      fecha: "2018/12/17",
      grupo: "Grupo 1"
    }
  ];

  //////////////////////////////////////////////////

  constructor() { }

  //////////////////////////////////////////////////
  //Método para componente de i-tareas-hoy
  listaHoy = [];

  fechaTarea(){
    var fechaHoy = new Date();
    fechaHoy.setHours(0,0,0,0);
    var fechaTarea;
    var resultadoFecha;

    for(var i in this.listaPendientes){

      fechaTarea = new Date(this.listaPendientes[i].fecha);
      fechaTarea.setHours(0,0,0,0);
      resultadoFecha = fechaHoy.getTime() === fechaTarea.getTime();

      if(resultadoFecha){
        this.listaHoy.push(this.listaPendientes[i]);
      }
    }

    return this.listaHoy;
  }

  //////////////////////////////////////////////////

  //Método para insertar tareas según grupo
  tareasGrupo(nombre){
    var listaTareasGrupo = [];
    var fechaHoy = new Date();
    fechaHoy.setHours(0,0,0,0);
    var fechaTarea;
    var resultadoFecha;

    for(var i in this.listaPendientes){
      if(nombre === this.listaPendientes[i].grupo){
        listaTareasGrupo.push(this.listaPendientes[i]);
      }
    }

    return listaTareasGrupo;
  }

  //////////////////////////////////////////////////
}
