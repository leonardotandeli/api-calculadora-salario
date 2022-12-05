import salarios from "../models/Salario.js";

class SalarioController {

    static calcularSalarioLiquido = (req, res) => {
        let salario = new salarios(req.body);
        salario.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao calcular`})
            } else {
                res.status(201).send(livro.toJSON())
            }
        })
    }

}

export default SalarioController