import { Component, OnInit } from '@angular/core';
import { ProdutosModel } from '../../models/produto.model';
import { ProdutosService } from '../../services/produtos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pesquisar-produtos',
  templateUrl: './pesquisar-produtos.component.html',
  styleUrls: ['./pesquisar-produtos.component.css']
})
export class PesquisarProdutosComponent implements OnInit {
  
    produtos: ProdutosModel[] = [];

  constructor(
    private produtosService: ProdutosService
  ) { }

  ngOnInit() {
    this.produtosService.getProdutos().subscribe(listaProdutos => {
      this.produtos = listaProdutos;
    });
  }

  

}
