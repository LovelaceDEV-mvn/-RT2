import Calculo from "./Calculo";

export default class Divisao extends Calculo {
    public calcular(numero1: number, numero2: number): number {
        if (numero2 === 0) {
            throw new Error("Divisão por zero não permitida!");
        }
        return numero1 / numero2;
    }
}
