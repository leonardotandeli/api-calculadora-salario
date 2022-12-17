import express from "express";
import routes from "./routes/index.js"
import cors from "cors";
import db from "./config/dbConnect.js";

//abre conexão com o banco
db.on("error", console.log.bind(console, 'Erro de Conexão'))
db.once("open", () => {
  console.log("conexão com o banco feita com sucesso")
})

//express
const api = express();

//define retorno dos dados em json 
api.use(express.json(), cors())

//define as rotas
routes(api)

export default api