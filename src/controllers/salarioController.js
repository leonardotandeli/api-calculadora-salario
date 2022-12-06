import salarios from "../models/Salario.js";

class SalarioController {

    static calcularSalarioLiquido = (req, res) => {
        let salario = new salarios(req.body);
        salario.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao calcular`})
            } else {



let salarioFinal = 0
let descontoFinal = 0


                if(salario.salarioBruto <= 1212) {
                    let valorDesconto = salario.salarioBruto
                    valorDesconto = (7.5 / 100) * salario.salarioBruto
                    salario.salarioLiquido = salario.salarioBruto - valorDesconto

                    salarioFinal = salario.salarioLiquido
                    descontoFinal = valorDesconto
                
                } else if (salario.salarioBruto >= 1212.01 && salario.salarioBruto <= 2427.35) {


                    let valorDesconto = salario.salarioBruto
                    valorDesconto = (9 / 100) * salario.salarioBruto
                    salario.salarioLiquido = salario.salarioBruto - valorDesconto
                    salarioFinal = salario.salarioLiquido
                    descontoFinal = valorDesconto
                } else if (salario.salarioBruto >= 2427.36 && salario.salarioBruto <= 3641.03) {

                    let valorDesconto = salario.salarioBruto
                    valorDesconto = (12 / 100) * salario.salarioBruto
                    salario.salarioLiquido = salario.salarioBruto - valorDesconto
                    salarioFinal = salario.salarioLiquido
                    descontoFinal = valorDesconto
                } else if (salario.salarioBruto >= 3641.04 && salario.salarioBruto <= 7087.22) {

                    let valorDesconto = salario.salarioBruto
                    valorDesconto = (14 / 100) * salario.salarioBruto
                    salario.salarioLiquido = salario.salarioBruto - valorDesconto
                    salarioFinal = salario.salarioLiquido
                    descontoFinal = valorDesconto
                } else if (salario.salarioBruto >= 7087.23) {


                    let valorDesconto = salario.salarioBruto
                    valorDesconto = (14 / 100) * salario.salarioBruto
                    salario.salarioLiquido = salario.salarioBruto - valorDesconto
                    salarioFinal = salario.salarioLiquido
                    descontoFinal = valorDesconto
                } else {
                    console.log("erro")
                }

                
                if(salario.salarioBruto <= 1903.98	) {

                
                    salario.salarioLiquido = salario.salarioBruto - descontoFinal
                    res.status(201).send({
                        salarioLiquido: salario.salarioLiquido
                    })



                } else if (salario.salarioBruto >= 1903.99 && salario.salarioBruto <= 2826.55) {
                    
                    let valorDesconto = salario.salarioBruto
                    valorDesconto = (7.5 / 100) * salario.salarioBruto
                    salario.salarioLiquido = salario.salarioBruto - valorDesconto - descontoFinal - salario.outrosDescontos
                    res.status(201).send({
                        salarioLiquido: salario.salarioLiquido
                    })


                } else if (salario.salarioBruto >= 2826.66 && salario.salarioBruto <= 3751.05) {

                    let valorDesconto = salario.salarioBruto
                    valorDesconto = (15 / 100) * salario.salarioBruto
                    salario.salarioLiquido = salario.salarioBruto - valorDesconto - descontoFinal - salario.outrosDescontos
                    res.status(201).send({
                        salarioLiquido: salario.salarioLiquido
                    })


                } else if (salario.salarioBruto >= 3751.06 && salario.salarioBruto <= 4664.68) {


                    let valorDesconto = salario.salarioBruto
                    valorDesconto = (22.50 / 100) * salario.salarioBruto
                    salario.salarioLiquido = salario.salarioBruto - valorDesconto - descontoFinal- salario.outrosDescontos
                    res.status(201).send({
                        salarioLiquido: salario.salarioLiquido
                    })

                } else if (salario.salarioBruto >= 4664.69) {


                    let valorDesconto = salario.salarioBruto
                    valorDesconto = (27.50 / 100) * salario.salarioBruto
                    salario.salarioLiquido = salario.salarioBruto - valorDesconto - descontoFinal- salario.outrosDescontos
                    res.status(201).send({

                        id: salario._id,
                        salarioBruto: salario.salarioBruto,
                        dataDeCalculo: salario.dataDeCalculo,
                        outrosDescontos: salario.outrosDescontos,
                        totalDescontos: valorDesconto + descontoFinal,
                        salarioLiquido: salario.salarioLiquido
                    })

                }



                // res.status(201).send(salario.toJSON())
            }
        })
    }

}

export default SalarioController