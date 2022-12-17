import mongoose from "mongoose";

const user = process.env.user
const pwd = process.env.pwd
const dbMongo = process.env.db

//string de conexão banco
mongoose.connect("mongodb+srv://"+user+":"+pwd+"@"+dbMongo);

let db = mongoose.connection;

export default db;

