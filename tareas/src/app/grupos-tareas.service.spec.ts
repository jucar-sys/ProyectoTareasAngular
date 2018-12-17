/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GruposTareasService } from './grupos-tareas.service';

describe('GruposTareasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GruposTareasService]
    });
  });

  it('should ...', inject([GruposTareasService], (service: GruposTareasService) => {
    expect(service).toBeTruthy();
  }));
});
