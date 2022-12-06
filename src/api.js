import express from "express";
import routes from "./routes/index.js"
import db from "./config/dbConnect.js";

db.on("error", console.log.bind(console, 'Erro de Conexão'))
db.once("open", () => {
  console.log("conexão com o banco feita com sucesso")
})


const api = express();

api.use(express.json())
routes(api)

export default api