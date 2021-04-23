import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ComboBox } from 'src/app/models/combo.box.model';

@Component({
  selector: 'app-combo-box',
  templateUrl: './combo-box.component.html',
  styleUrls: ['./combo-box.component.css']
})
export class ComboBoxComponent implements OnInit {

  @Input() nomeCombo: string;

  @Input() conteudoCombo: ComboBox[] = [];

  @Input() indexDesejado: number;

  @Input() valorDefault: any;

  @Output() itemSelecionadoEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.obterValorDefault();
  }

  itemSelecionado(valor: any) {
    this.itemSelecionadoEvent.emit(valor);
  }

  obterValorDefault() {
    this.valorDefault = this.conteudoCombo[this.indexDesejado];
  }
}
