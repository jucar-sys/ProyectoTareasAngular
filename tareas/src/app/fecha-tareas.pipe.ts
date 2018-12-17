import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fechaTareas'
})
export class FechaTareasPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var fechaHoy = new Date();
    fechaHoy.setHours(0,0,0,0);
    var fechaTarea = new Date(value);
    fechaTarea.setHours(0,0,0,0);

    var resultadoFecha = fechaHoy.getTime() >= fechaTarea.getTime();
    console.log(resultadoFecha);

    if(resultadoFecha){
      return value+" !";
    }else{
      return value;
    }
  }

}
