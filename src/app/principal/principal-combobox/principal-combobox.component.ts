import { Component, OnInit } from '@angular/core';
import { ComboBox } from 'src/app/models/combo.box.model';

@Component({
  selector: 'app-principal-combobox',
  templateUrl: './principal-combobox.component.html',
  styleUrls: ['./principal-combobox.component.css']
})
export class PrincipalComboboxComponent implements OnInit {

  comboSexo: ComboBox[] = [];
  comboStatus: ComboBox[] = [];
  comboPedido: ComboBox[] = [];

  constructor() { }

  ngOnInit(): void {
    this.listarSexo();
    this.listarStatus();
    this.listarStatusPedido();
  }

  listarSexo() {
    this.comboSexo = [
      { Valor: 1, Descricao: 'Feminino' },
      { Valor: 2, Descricao: 'Masculino' },
    ];
  }

  listarStatus() {
    this.comboStatus = [
      { Valor: 1, Descricao: 'Ativo' },
      { Valor: 2, Descricao: 'Pendente' },
      { Valor: 3, Descricao: 'Inativo' }
    ];
  }

  listarStatusPedido() {
    this.comboPedido = [
      { Valor: 1, Descricao: 'Aguardando' },
      { Valor: 2, Descricao: 'Feito' },
      { Valor: 3, Descricao: 'Aguardando Pagamento' },
      { Valor: 4, Descricao: 'Concluido' },
    ]
  }

  sexoSelecionado(valor: any) {
    console.log(`Recebendo valor do componente Combo-box ${valor.Descricao}`);
  }

  statusSelecionado(valor: any) {
    console.log(`Recebendo valor do componente Combo-box ${valor.Descricao}`);
  }

  statusPedidoSelecionado(valor: any) {
    console.log(`Recebendo valor do componente Combo-box ${valor.Descricao}`);
  }

}
