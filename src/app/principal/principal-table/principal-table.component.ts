import { Component, OnInit } from '@angular/core';

import { DadosCliente } from 'src/app/models/periodic-element.model';
import { ServicefakeService } from 'src/app/service/servicefake.service';
import { ETipoDados } from 'src/app/enum/TipoDados/ETipoDados';
import { TipoDeDadosTabela } from 'src/app/models/tipo-dados.model';

@Component({
  selector: 'app-principal-table',
  templateUrl: './principal-table.component.html',
  styleUrls: ['./principal-table.component.css']
})
export class PrincipalTableComponent implements OnInit {

  tipoDeDadosTabela: TipoDeDadosTabela[]= [];

  nomeColunas: string[] = ['codigo', 'nome', 'CPF', 'CNPJ', 'excluir'];
  dataSource: DadosCliente[];

  constructor(private serviceFake: ServicefakeService) { }

  ngOnInit(): void {
    this.popularTabela();
    this.tipoDeDadosTabela = this.criarTipoDadosTabela();
  }

  criarTipoDadosTabela(): TipoDeDadosTabela[] {
    return [
      { nomeColuna: 'codigo', tipoColuna: ETipoDados.Link },
      { nomeColuna: 'nome', tipoColuna: ETipoDados.Texto },
      { nomeColuna: 'CPF', tipoColuna: ETipoDados.CPF },
      { nomeColuna: 'CNPJ', tipoColuna: ETipoDados.CNPJ },
      { nomeColuna: 'excluir', tipoColuna: ETipoDados.Excluir }
    ];
  }

  popularTabela() {
    this.dataSource = this.serviceFake.obterPeriodicElement();
  }

  excluirRegistro(itemSelecionado: any) {
    console.log(itemSelecionado);
  }

}
