import express from "express";
import salarioController from "../controllers/salarioController.js";

const router = express.Router()

router
.post('/salario', salarioController.calcularSalarioLiquido)

export default router