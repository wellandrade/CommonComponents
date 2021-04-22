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

  @Output() itemSelecionadoEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  itemSelecionado(valor: any) {
    this.itemSelecionadoEvent.emit(valor);
  }
}
