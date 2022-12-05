import api from "./src/api.js";

const port = process.env.port || 3000;

api.listen(port, () => {
    console.log(`servidor escutando na porta` + port)
})