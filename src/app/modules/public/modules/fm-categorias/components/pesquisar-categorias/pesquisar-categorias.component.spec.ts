import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisarCategoriasComponent } from './pesquisar-categorias.component';

describe('PesquisarCategoriasComponent', () => {
  let component: PesquisarCategoriasComponent;
  let fixture: ComponentFixture<PesquisarCategoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisarCategoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisarCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
