import { Component, OnInit } from '@angular/core';
import { CategoriasModel } from '../../models/categorias.model';
import { FmCategoriasService } from '../../services/fm-categorias.service';

@Component({
  selector: 'app-manter-categorias',
  templateUrl: './manter-categorias.component.html',
  styleUrls: ['./manter-categorias.component.css']
})
export class ManterCategoriasComponent implements OnInit {

  categorias: CategoriasModel[] = [];

  constructor(private categoriasService: FmCategoriasService) { }

  ngOnInit() {
    }
  

}
