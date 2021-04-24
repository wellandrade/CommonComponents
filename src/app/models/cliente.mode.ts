import { Endereco } from "./endereco.model";

export interface Cliente {
    nome: string;
    email: string;
    endereco: Endereco;
}

