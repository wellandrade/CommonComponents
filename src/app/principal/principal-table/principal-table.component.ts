import { Component, OnInit } from '@angular/core';

import { PeriodicElement } from 'src/app/models/periodic-element.model';
import { ServicefakeService } from 'src/app/service/servicefake.service';


export enum ETipoDados {
  Texto = 'Texto',
  CNPJ = 'CNPJ',
  CPF = 'CPF'
}

export interface TipoDeDadosTabela {
  nomeColuna: string;
  tipoColuna: ETipoDados;
}

@Component({
  selector: 'app-principal-table',
  templateUrl: './principal-table.component.html',
  styleUrls: ['./principal-table.component.css']
})
export class PrincipalTableComponent implements OnInit {

  tipoDeDadosTabela: TipoDeDadosTabela[] = [
    { nomeColuna: 'id', tipoColuna: ETipoDados.Texto },
    { nomeColuna: 'nome', tipoColuna: ETipoDados.Texto },
    { nomeColuna: 'CPF', tipoColuna: ETipoDados.CPF },
    { nomeColuna: 'CNPJ', tipoColuna: ETipoDados.CNPJ },
    { nomeColuna: 'novaColuna', tipoColuna: ETipoDados.Texto }
  ];

  nomeColunas: string[] = ['id', 'nome', 'CPF', 'CNPJ', 'novaColuna'];
  dataSource: PeriodicElement[];

  constructor(private serviceFake: ServicefakeService) { }

  ngOnInit(): void {
    this.popularTabela();
  }

  popularTabela() {
    this.dataSource = this.serviceFake.obterPeriodicElement();
  }

}
