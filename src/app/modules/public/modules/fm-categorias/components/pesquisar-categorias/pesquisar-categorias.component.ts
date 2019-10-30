import { Component, OnInit } from '@angular/core';
import { FmCategoriasModule } from '../../fm-categorias.module';
import { FmCategoriasService } from '../../services/fm-categorias.service';
import { CategoriasModel } from '../../models/categorias.model';

@Component({
  selector: 'app-pesquisar-categorias',
  templateUrl: './pesquisar-categorias.component.html',
  styleUrls: ['./pesquisar-categorias.component.css']
})
export class PesquisarCategoriasComponent implements OnInit {

  categorias: CategoriasModel[] = [];

  constructor(
    private categoriasService: FmCategoriasService
  ) { }

  ngOnInit() {
    this.categoriasService.getCategorias().subscribe(listaCategorias =>{
    this.categorias = listaCategorias;
    })
  }

}
