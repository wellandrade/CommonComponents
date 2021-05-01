import { Component, OnInit } from '@angular/core';

import { DadosCliente } from 'src/app/models/periodic-element.model';
import { ServicefakeService } from 'src/app/service/servicefake.service';
import { ETipoDados } from 'src/app/enum/TipoDados/ETipoDados';
import { TipoDeDadosTabela } from 'src/app/models/tipo-dados.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-principal-table',
  templateUrl: './principal-table.component.html',
  styleUrls: ['./principal-table.component.css']
})
export class PrincipalTableComponent implements OnInit {

  tipoDeDadosTabela: TipoDeDadosTabela[] = [];

  nomeColunas: string[] = ['codigo', 'nome', 'CPF', 'CNPJ', 'excluir', 'ativo'];
  dataSource: DadosCliente[];

  constructor(private serviceFake: ServicefakeService,
    private dialog: MatDialog) { }

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
      { nomeColuna: 'excluir', tipoColuna: ETipoDados.Excluir },
      { nomeColuna: 'ativo', tipoColuna: ETipoDados.SlideToggle }
    ];
  }

  popularTabela() {
    this.dataSource = this.serviceFake.dadosFake();
  }

  excluirRegistro(itemSelecionado: any) {
    this.abrirDialog('Atenção', `Deseja realmente excluir o(a) funcionario(a) ${itemSelecionado.nome} ?`, itemSelecionado);
  }

  inativarRegistros(itemSelecionado: any) {
    console.log(`Ativar/inativar a opcao ${itemSelecionado}`);
  }

  abrirDialog(titulo: string, descricao: string, itemSelecionado: any) {
    console.log(itemSelecionado.nome);

    this.dialog.open(DialogComponent, {
      data: {
        Titulo: titulo,
        Descricao: descricao,
        Id: itemSelecionado.codigo
      }
    });
  }

}
