import mongoose from "mongoose";

const user = process.env.MongoUSER
const pwd = process.env.MongoPASS
const dbMongo = process.env.MongoURL

//string de conexão banco
mongoose.connect("mongodb+srv://"+user+":"+pwd+"@"+dbMongo);

let db = mongoose.connection;

export default db;

