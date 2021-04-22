import { Injectable } from '@angular/core';
import { DadosCliente } from '../models/periodic-element.model';

@Injectable({
  providedIn: 'root'
})
export class ServicefakeService {

  constructor() { }

  obterPeriodicElement(): DadosCliente[] {
    return [
      { id: 1, nome: 'Ana', CPF: '01234567899', CNPJ: '11100033344447', novaColuna: 'adasd' },
      { id: 2, nome: 'Maria', CPF: '27897987987', CNPJ: '77788899955544', novaColuna: 'adasd' },
      { id: 3, nome: 'Joao', CPF: '65015314564', CNPJ: '00088899977754', novaColuna: 'adasd' },
    ]
  }

}
