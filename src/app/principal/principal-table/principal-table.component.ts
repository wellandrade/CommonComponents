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

  nomeColunas: string[] = ['id', 'nome', 'CPF', 'CNPJ', 'novaColuna'];
  dataSource: DadosCliente[];

  constructor(private serviceFake: ServicefakeService) { }

  ngOnInit(): void {
    this.popularTabela();
    this.tipoDeDadosTabela = this.criarTipoDadosTabela();
  }

  criarTipoDadosTabela(): TipoDeDadosTabela[] {
    return [
      { nomeColuna: 'id', tipoColuna: ETipoDados.Texto },
      { nomeColuna: 'nome', tipoColuna: ETipoDados.Texto },
      { nomeColuna: 'CPF', tipoColuna: ETipoDados.CPF },
      { nomeColuna: 'CNPJ', tipoColuna: ETipoDados.CNPJ },
      { nomeColuna: 'novaColuna', tipoColuna: ETipoDados.Texto }
    ];
  }

  popularTabela() {
    this.dataSource = this.serviceFake.obterPeriodicElement();
  }

}
