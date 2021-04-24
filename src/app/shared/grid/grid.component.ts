import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TipoDeDadosTabela } from 'src/app/models/tipo-dados.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  @Input() definicaoNomeDasColunas: string[];

  @Input() tipoColunas: TipoDeDadosTabela[];

  @Input() dadosTabela: any[];

  @Output() itemSelecionado = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {

  }

  removerRegistro(item: any) {
    this.itemSelecionado.emit(item);
  }

}
