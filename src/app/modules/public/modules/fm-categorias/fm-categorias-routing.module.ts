import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PesquisarCategoriasComponent } from './components/pesquisar-categorias/pesquisar-categorias.component';
import { ManterCategoriasComponent } from './components/manter-categorias/manter-categorias.component';

const routes: Routes = [
  {path: '', component: PesquisarCategoriasComponent},
  {path: 'cadastrar', component: ManterCategoriasComponent },
  {path: 'editar/:id', component: ManterCategoriasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FmCategoriasRoutingModule { }
