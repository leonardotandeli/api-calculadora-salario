import express from "express";
import routes from "./routes/index.js"

const api = express();

api.use(express.json())
routes(api)

export default api