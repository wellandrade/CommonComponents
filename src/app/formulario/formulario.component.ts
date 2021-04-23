import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formCadastro: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.criarFormulario();
  }

  criarFormulario() {
    this.formCadastro = this.fb.group({
      nome: ['', Validators.compose([Validators.required, Validators.maxLength(10)])],
      email: ['', Validators.compose([Validators.required, Validators.maxLength(10)])],
      endereco: this.fb.group({
        cep: ['', Validators.compose([Validators.required, Validators.maxLength(10)])],
        logradouro: ['', Validators.compose([Validators.required, Validators.maxLength(10)])],
        bairro: ['', Validators.compose([Validators.required, Validators.maxLength(10)])],
      })
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
      this.obterValoresDoForm();
      console.log('Dados cadastrados');
    }
    else {
      console.log('Formulario invalido');
    }
  }

}
