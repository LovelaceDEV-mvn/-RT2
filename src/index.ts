import * as readline from "readline";
import Soma from "./operacoes/Soma";
import Subtracao from "./operacoes/Subtracao";
import Multiplicacao from "./operacoes/Multiplicacao";
import Divisao from "./operacoes/Divisao";
import Potenciacao from "./operacoes/Potenciacao";
import Radiciacao from "./operacoes/Radiciacao";
import Bhaskara from "./operacoes/Bhaskara";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Bem-vindo à Calculadora CLI!");
rl.question("Escolha a operação (soma, subtracao, multiplicacao, divisao, potenciacao, radiciacao, bhaskara): ", (operacao) => {
    
    if (operacao === "bhaskara") {
        rl.question("Digite o valor de A: ", (a) => {
            rl.question("Digite o valor de B: ", (b) => {
                rl.question("Digite o valor de C: ", (c) => {
                    const bhaskara = new Bhaskara();
                    console.log(bhaskara.calcular(parseFloat(a), parseFloat(b), parseFloat(c)));
                    rl.close();
                });
            });
        });
    } else {
        rl.question("Digite o primeiro número: ", (num1) => {
            rl.question("Digite o segundo número: ", (num2) => {
                const numero1 = parseFloat(num1);
                const numero2 = parseFloat(num2);
                let calculo;

                switch (operacao) {
                    case "soma":
                        calculo = new Soma();
                        break;
                    case "subtracao":
                        calculo = new Subtracao();
                        break;
                    case "multiplicacao":
                        calculo = new Multiplicacao();
                        break;
                    case "divisao":
                        calculo = new Divisao();
                        break;
                    case "potenciacao":
                        calculo = new Potenciacao();
                        break;
                    case "radiciacao":
                        calculo = new Radiciacao();
                        break;
                    default:
                        console.log("Operação inválida!");
                        rl.close();
                        return;
                }

                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}`);
                rl.close();
            });
        });
    }
});
