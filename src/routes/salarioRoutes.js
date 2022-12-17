import express from "express";
import salarioController from "../controllers/salarioController.js";

const router = express.Router()

//define as rotas da API
router
.post('/salario', salarioController.calcularSalarioLiquido)
.get('/salario', salarioController.exibirSalarios)

export default router