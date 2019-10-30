import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FmCategoriasRoutingModule } from './fm-categorias-routing.module';
import { PesquisarCategoriasComponent } from './components/pesquisar-categorias/pesquisar-categorias.component';
import { ManterCategoriasComponent } from './components/manter-categorias/manter-categorias.component';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';
import { FmCategoriasService } from './services/fm-categorias.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PesquisarCategoriasComponent, ManterCategoriasComponent],
  imports: [
    CommonModule,
    FmCategoriasRoutingModule,
    SharedComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    

    
  ],
  providers: [FmCategoriasService]

})
export class FmCategoriasModule { }
