import mongoose, { SchemaTypes } from "mongoose";

//define um modelo de salario para amarzenamento no mongodb
const salarioSchema = new mongoose.Schema(
    {
        id: {type: String},
        salarioBruto: {type: Number},
        dataDeCalculo: {type: Date, default: Date.now},
        dependentes: {type: Number, default: 0},
        salarioLiquido: {type: Number},
        aliquotaINSS: {type: Number},
        aliquotaIRPF: {type: Number},
        descontoINSS: {type: Number},
        descontoIRPF: {type: Number},
        outrosDescontos: {type: Number, default: 0},
        totalDescontos: {type: Number},
        profissao: {type: String}
    },
    {
        versionKey: false
    }
)

const salarios = mongoose.model('salarios', salarioSchema)

export default salarios