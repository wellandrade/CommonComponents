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

  indexSexoDesejado: number;
  indexStatusDesejado: number;
  indexStatusPedidoDesejado: number;

  constructor() { }

  ngOnInit(): void {
    this.popularComboSexo();
    this.popularComboStatus();
    this.popularComboStatusPedido();

    this.obterIndiceDoSexoDesejado();
    this.obterIndiceDoStatusDesejado();
    this.obterIndiceDoStatusPedidoDesejado();
  }

  popularComboSexo() {
    this.comboSexo = [
      { Valor: 1, Descricao: 'Feminino' },
      { Valor: 2, Descricao: 'Masculino' },
    ];
  }

  popularComboStatus() {
    this.comboStatus = [
      { Valor: 1, Descricao: 'Ativo' },
      { Valor: 2, Descricao: 'Pendente' },
      { Valor: 3, Descricao: 'Inativo' }
    ];
  }

  popularComboStatusPedido() {
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

  obterIndiceDoSexoDesejado() {
    let idSexoSelecionado = 1; // Para vim o status pendente como default, valor vem do service
    this.indexSexoDesejado = this.comboSexo.map((item) => item.Valor).indexOf(idSexoSelecionado);
  }

  obterIndiceDoStatusDesejado() {
    let idStatusSelecionado = 3; // Para vim o status pendente como default, valor vem do service
    this.indexStatusDesejado = this.comboStatus.map((item) => item.Valor).indexOf(idStatusSelecionado);
  }

  obterIndiceDoStatusPedidoDesejado() {
    let idStatusPedidoSelecionado = 1; // Para vim o status pendente como default, valor vem do service
    this.indexStatusPedidoDesejado = this.comboPedido.map((item) => item.Valor).indexOf(idStatusPedidoSelecionado);
  }

}
