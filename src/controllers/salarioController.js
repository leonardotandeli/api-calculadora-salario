import salarios from "../models/Salario.js";
import SubtrairINSS from "../calc/inss.js";
import SubtrairIRPF from "../calc/irpf.js";
import SubtrairDescontos from "../calc/descontos.js";
import Dependente from "../calc/dependente.js";
class SalarioController {

    //metodo para calcular o salário liquido
    static calcularSalarioLiquido = (req, res) => {
        let salarioL = 0

        //obtem dos dados do body
        let salario = new salarios(req.body);

        //realiza o cálculo do INSS
        const inss = SubtrairINSS(salario.salarioBruto)
        salarioL = inss.salarioLiquido

        //realiza o cálculo de dependentes
        const dependente = Dependente(salario.salarioBruto, salario.dependentes)
        let salarioTotalizado = dependente.salario - inss.totalDesconto

        //realiza o calculo do IRPF
        const irpf = SubtrairIRPF(salarioTotalizado)
        salarioL = salario.salarioBruto - irpf.totalDesconto - inss.totalDesconto

        //realiza o calculo de descontos informados pelo usuário
        const descontos = SubtrairDescontos(salarioL, salario.outrosDescontos)
        salario.salarioLiquido = descontos.salarioComDesconto
        salario.totalDescontos = salario.outrosDescontos + inss.totalDesconto + irpf.totalDesconto

            //salva os dados no banco de dados, e retorna o resultado em json
            salario.save((err) => {
                if (err) {
                    res.status(500).send({
                        message: `${err.message} - falha ao calcular`
                    })
                } else {
                    res.status(201).send({
                        id: salario._id,
                        salarioBruto: salario.salarioBruto,
                        dataDeCalculo: salario.dataDeCalculo,
                        salarioLiquido: descontos.salarioComDesconto,
                        dependentes: salario.dependentes,
                        aliquotaINSS: inss.aliquota,
                        aliquotaIRPF: irpf.aliquota,
                        descontoINSS: inss.totalDesconto,
                        descontoIRPF: irpf.totalDesconto,
                        outrosDescontos: salario.outrosDescontos,
                        totalDescontos: salario.outrosDescontos + inss.totalDesconto + irpf.totalDesconto,
                        profissao: salario.profissao
                    })
                }
            })
    }
    
    //metodo para exibir todos os salários
    static exibirSalarios = (req, res) => {
        salarios.find({}).sort({
                dataDeCalculo: -1
            })
            .then(dados => {
                res.send(dados)
            })
    }
}

export default SalarioController