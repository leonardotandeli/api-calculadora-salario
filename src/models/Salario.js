import mongoose, { SchemaTypes } from "mongoose";

const salarioSchema = new mongoose.Schema(
    {
        id: {type: String},
        salarioBruto: {type: Number},
        dataDeCalculo: {type: Date, default: Date.now},
        totalDescontos: {type: Number},
        outrosDescontos: {type: Number, default: 0},
        salarioLiquido: {type: Number}
    },
    {
        versionKey: false
    }
)

const salarios = mongoose.model('salarios', salarioSchema)

export default salarios