import express from "express";
import salario from "./salarioRoutes.js";


const routes = (api) => {
    api.route('/').get((req, res) => {
        res.status(200).send({titulo: "tudo ok por aqui"})
    })
    api.use(
        express.json(),
        salario
    )
}

export default routes