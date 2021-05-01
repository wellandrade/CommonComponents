import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ETipoDados } from '../enum/TipoDados/ETipoDados';
import { Cliente } from '../models/cliente.mode';
import { DadosCliente } from '../models/periodic-element.model';
import { TipoDeDadosTabela } from '../models/tipo-dados.model';
import { ServicefakeService } from '../service/servicefake.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formCadastro: FormGroup;
  displayedColumns: string[] = ['id', 'nome', 'CPF', 'CNPJ', 'novaColuna', 'icone'];

  dataSource: DadosCliente[];

  constructor(private fb: FormBuilder,
    private serviceFake: ServicefakeService) { }

  ngOnInit(): void {
    this.criarFormulario();
    this.obterDadosCliente();
  }

  obterDadosCliente() {
    this.dataSource = this.serviceFake.dadosFake();
  }

  criarFormulario() {
    this.formCadastro = this.fb.group({
      nome: ['', Validators.compose([Validators.required, Validators.maxLength(10)])],
      email: ['', Validators.compose([Validators.required, Validators.maxLength(10)])],
      // endereco: this.fb.group({
      cep: ['', Validators.compose([Validators.required, Validators.maxLength(10)])],
      logradouro: ['', Validators.compose([Validators.required, Validators.maxLength(10)])]
      // })
    })
  }

  validarCampos(): boolean {

    if (this.formCadastro.controls.nome.hasError('required') || this.formCadastro.controls.nome.hasError('maxlength')) {
      console.log('O nome é obrigatorio e deve conter no maximo 5 caracteres');
      return false;
    }

    if (this.formCadastro.controls.email.hasError('required') || this.formCadastro.controls.email.hasError('maxlength')) {
      console.log('O nome é obrigatorio e deve conter no maximo 5 caracteres');
      return false;
    }

    return true;
  }

  obterValoresDoForm() {
    console.log(this.formCadastro.value);

    console.log(this.formCadastro.controls.nome.value);
    console.log(this.formCadastro.controls.email.value);

    console.log(this.formCadastro.get('endereco')?.get('cep')?.value);
    console.log(this.formCadastro.get('endereco')?.get('logradouro')?.value);
    console.log(this.formCadastro.get('endereco')?.get('bairro')?.value);
  }

  salvar() {
    if (this.validarCampos()) {
      this.serviceFake.gravarDadosCliente(this.formCadastro.value);
      this.formCadastro.reset();
      alert('Dados cadastrado com sucesso');
      this.obterDadosCliente();
    }
    else {
      alert('Formulario invalido');
    }
  }

}
