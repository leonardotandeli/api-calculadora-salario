export default function SubtrairDescontos(salario, descontos) {
    //define a variavel iniciai para o cálculo
    let salarioComDesconto = 0
    //cálculo
    salarioComDesconto = salario - descontos
    //retorno
    return {salarioComDesconto}
}
