export default function SubtrairINSS(salario) {
    //define as variaveis iniciais para o cálculo
    let salarioLiquido = 0
    let totalDesconto = 0
    let aliquota = 0

    // calculo 
    if (salario <= 1212) { //até 1212 | aliquota de 7,5
        //aliquota
        aliquota = 7.5
        //cálculo
        let valorDesconto = salario
        valorDesconto = (aliquota / 100) * salario
        salarioLiquido = salario - valorDesconto
        totalDesconto = valorDesconto
    } else if (salario >= 1212.01 && salario <= 2427.35) { // R$ 1.212,01 até R$ 2.427,35 | aliquota de 9
        //aliquota
        aliquota = 9
        //cálculo
        let valorDesconto = salario
        valorDesconto = (aliquota / 100) * salario
        salarioLiquido = salario - valorDesconto
        totalDesconto = valorDesconto
    } else if (salario >= 2427.36 && salario <= 3641.03) { // R$ 2.427,36 até R$ 3.641,03 | aliquota de 12
        //aliquota
        aliquota = 12
        //cálculo
        let valorDesconto = salario
        valorDesconto = (aliquota / 100) * salario
        salarioLiquido = salario - valorDesconto
        totalDesconto = valorDesconto
    } else if (salario >= 3641.04 && salario <= 7087.22) { // R$ 3.641,04 até R$ 7.087,22 | aliquota de 14
        //aliquota
        aliquota = 14
        //cálculo
        let valorDesconto = salario
        valorDesconto = (aliquota / 100) * salario
        salarioLiquido = salario - valorDesconto
        totalDesconto = valorDesconto
    } else if (salario >= 7087.23) { // ACIMA DE 7087.23 | aliquota de 14
        //aliquota
        aliquota = 14
        //cálculo
        let valorDesconto = salario
        valorDesconto = (aliquota / 100) * salario
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









//    return salarioBruto = 4 - 1, salarioLiquido = 2
