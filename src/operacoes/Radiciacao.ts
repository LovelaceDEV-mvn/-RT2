import Calculo from "./Calculo";

export default class Radiciacao extends Calculo {
    public calcular(numero: number, indice: number = 2): number {
        return Math.pow(numero, 1 / indice);
    }
}
