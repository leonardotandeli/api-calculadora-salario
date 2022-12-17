export default function Dependente(salario, quantidade) {

    //define a variavel iniciai para o cálculo
    let deducao = 189.59
    //cálculo
    deducao = deducao * quantidade // salario - numero de dependes x 189,59
    salario = salario - deducao
    //retorno
    return {
        salario,
        quantidade
    }
}