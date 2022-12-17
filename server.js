import api from "./src/api.js";

//define a porta da api
const port = process.env.port || 3001;

//inicia o servidor http
api.listen(port, () => {
    console.log(`servidor escutando na porta` + port)
})