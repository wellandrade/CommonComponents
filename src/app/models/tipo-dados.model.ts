import { ETipoDados } from "../enum/TipoDados/ETipoDados";

export interface TipoDeDadosTabela {
    nomeColuna: string;
    tipoColuna: ETipoDados;
}