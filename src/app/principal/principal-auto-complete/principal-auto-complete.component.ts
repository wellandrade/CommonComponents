import { Component, OnInit } from '@angular/core';
import { AutoComplete } from 'src/app/models/auto-complete.model';

@Component({
  selector: 'app-principal-auto-complete',
  templateUrl: './principal-auto-complete.component.html',
  styleUrls: ['./principal-auto-complete.component.css']
})
export class PrincipalAutoCompleteComponent implements OnInit {

  cidades: AutoComplete[] = [];
  paises: AutoComplete[] = [];

  constructor() { }

  ngOnInit(): void {
    this.popularCidades();
    this.popularPaises();
  }

  popularCidades() {
    this.cidades = [
      { Id: 1, Valor: 'Minas Gerais' },
      { Id: 2, Valor: 'Sao Paulo' },
      { Id: 3, Valor: 'Rio de Janeiro' },
      { Id: 4, Valor: 'Rio Grande do Sul' },
      { Id: 5, Valor: 'Fortaleza' },
    ]
  }

  popularPaises() {
    this.paises = [
      { Id: 1, Valor: 'Brasil' },
      { Id: 2, Valor: 'Argentina' },
      { Id: 3, Valor: 'EUA' },
      { Id: 4, Valor: 'Espanha' },
      { Id: 5, Valor: 'Holanda' },
      { Id: 6, Valor: 'Italia' },
      { Id: 7, Valor: 'Chile' },
    ]
  }

  autoCompleteSelected(valor: any) {
    console.log(valor);
  }

}
