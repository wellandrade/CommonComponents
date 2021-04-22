import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AutoComplete } from '../../models/auto-complete.model';

export interface Cidade {
  id: number;
  desc: string;
}

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent {

  @Input() nomeAutoComplete: string;

  @Input() conteudoAutoComplete: AutoComplete[] = [];

  @Output() itemSelecionadoEvent = new EventEmitter<string>();

  autoCompleteControl = new FormControl();
  filtroAutoComplete: Observable<AutoComplete[]>;

  constructor() {
    this.filtroAutoComplete = this.autoCompleteControl.valueChanges
      .pipe(
        startWith(''),
        map(item => item ? this._filtrarAutoComplete(item) : this.conteudoAutoComplete.slice())
      );
  }

  private _filtrarAutoComplete(value: string): AutoComplete[] {
    const filterValue = value.toLowerCase();

    return this.conteudoAutoComplete.filter(item => item.Valor.toLowerCase().indexOf(filterValue) === 0);
  }

  autoCompleteChange(valor: any) {
    this.itemSelecionadoEvent.emit(valor);
  }

}
