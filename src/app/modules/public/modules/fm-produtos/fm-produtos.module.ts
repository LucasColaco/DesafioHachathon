import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';
import { PesquisarProdutosComponent } from './components/pesquisar-produtos/pesquisar-produtos.component';
import { FmProdutosRoutingModule } from './fm-produtos-routing.module';
import { ProdutosService } from './services/produtos.service';
import { ManterProdutosComponent } from './components/manter-produtos/manter-produtos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PesquisarProdutosComponent, ManterProdutosComponent],
  imports: [
    CommonModule,
    FmProdutosRoutingModule,
    SharedComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProdutosService
  ]
})
export class FmProdutosModule { 

}
