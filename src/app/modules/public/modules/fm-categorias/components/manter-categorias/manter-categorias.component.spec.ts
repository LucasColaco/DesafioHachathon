import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManterCategoriasComponent } from './manter-categorias.component';

describe('ManterCategoriasComponent', () => {
  let component: ManterCategoriasComponent;
  let fixture: ComponentFixture<ManterCategoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManterCategoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManterCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
