export default function SubtrairIRPF(salario) {
    //define as variaveis iniciais para o cálculo
    let aliquota = 0
    let salarioLiquido = 0
    let totalDesconto = 0


    // calculo
    if (salario <= 1903.98) { // de 0,00 até 1.903,98 | insento
        aliquota = 0 // insento
        totalDesconto = 0 // insento
        salarioLiquido = salario
    } else if (salario >= 1903.99 && salario <= 2826.55) { // de 1.903,99 até 2.826,65 | 7,50%	| 142,80
        //deducao irpf
        let deducao = 142.80
        //aliquota
        aliquota = 7.5
        //calculo
        let valorDesconto = salario
        valorDesconto = (aliquota / 100) * salario
        valorDesconto = valorDesconto - deducao
        salarioLiquido = salario - valorDesconto
        totalDesconto = valorDesconto

    } else if (salario >= 2826.66 && salario <= 3751.05) { // de 2.826,66 até 3.751,05	| 15,00% | 354,80
        //deducao irpf
        let deducao = 354.80
        //aliquota
        aliquota = 15
        //calculo
        let valorDesconto = salario
        valorDesconto = (aliquota / 100) * salario
        valorDesconto = valorDesconto - deducao
        salarioLiquido = salario - valorDesconto
        totalDesconto = valorDesconto
    } else if (salario >= 3751.06 && salario <= 4664.68) { // de 3.751,06 até 4.664,68 | 22,50% | 636,13
        //deducao irpf
        let deducao = 636.13
        //aliquota
        aliquota = 22.50
        //calculo
        let valorDesconto = salario
        valorDesconto = (aliquota / 100) * salario
        valorDesconto = valorDesconto - deducao
        salarioLiquido = salario - valorDesconto
        totalDesconto = valorDesconto
    } else if (salario >= 4664.69) { // a partir de 4.664,68 | 27,50% | 869,36
        //deducao irpf
        let deducao = 869.36
        //aliquota
        aliquota = 27.50
        //calculo
        let valorDesconto = salario
        valorDesconto = (aliquota / 100) * salario
        valorDesconto = valorDesconto - deducao
        salarioLiquido = salario - valorDesconto
        totalDesconto = valorDesconto
    } else {
        console.log("erro")
    }
    //retorno
    return {
        totalDesconto,
        salarioLiquido,
        aliquota
    }
}