import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-manter-produtos',
  templateUrl: './manter-produtos.component.html',
  styleUrls: ['./manter-produtos.component.css']
})
export class ManterProdutosComponent implements OnInit {
  cadastroForm: FormGroup
  constructor(private fb :FormBuilder) { }

  ngOnInit() {
  }

  createCadastroForm(){
    this.cadastroForm = this.fb.group({
      nome:['',Validators.required],
      desc:['',Validators.required],
      categoriasId:['',Validators.required],
      valor:['',Validators.required]
    })
  }

  saveProduct(){
    console.log(this.cadastroForm.getRawValue())
  }
}
