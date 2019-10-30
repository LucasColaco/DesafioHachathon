import { TestBed } from '@angular/core/testing';

import { FmCategoriasService } from './fm-categorias.service';

describe('FmCategoriasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FmCategoriasService = TestBed.get(FmCategoriasService);
    expect(service).toBeTruthy();
  });
});
