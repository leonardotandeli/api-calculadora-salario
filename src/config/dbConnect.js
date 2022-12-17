import mongoose from "mongoose";

const user = process.env.MONGO_USER
const pwd = process.env.MONGO_PASS
const dbMongo = process.env.MONGO_URL

//string de conexão banco
mongoose.connect("mongodb+srv://"+user+":"+pwd+"@"+dbMongo);

let db = mongoose.connection;

export default db;

