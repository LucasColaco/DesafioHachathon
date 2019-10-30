import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FmCategoriasModule } from '../fm-categorias.module';
import { FmCategoriasRoutingModule } from '../fm-categorias-routing.module';
import { Observable } from 'rxjs';
import { CategoriasModel } from '../models/categorias.model';

@Injectable()
export class FmCategoriasService {

  constructor(
    private http: HttpClient
  ) { }

  getCategorias(): Observable<CategoriasModel[]> {
    return this.http.get<CategoriasModel[]>('http://localhost:3000/categorias');
  }

  cadastrar(modelo: CategoriasModel): Observable<CategoriasModel> {
    return this.http.post<CategoriasModel>('http://localhost:3000/categorias', modelo);
  }

  atualizar(modelo: CategoriasModel, id: number): Observable<CategoriasModel> {
    return this.http.put<CategoriasModel>('http://localhost:3000/categorias' + id, modelo)
  }

  delete(id: number): Observable<CategoriasModel>{
    return this.http.delete<CategoriasModel>('http://localhost:3000/categorias' + id)
  }
}
