import { Component, Input, OnInit } from '@angular/core';
import { TipoDeDadosTabela } from 'src/app/principal/principal-table/principal-table.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  @Input() definicaoNomeDasColunas: string[];

  @Input() tipoColunas: TipoDeDadosTabela[];

  @Input() dadosTabela: any[];

  constructor() { }

  ngOnInit(): void {

  }

}
