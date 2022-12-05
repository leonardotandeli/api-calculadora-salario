import mongoose from "mongoose";

mongoose.connect("mongodb+srv://user:pass@cluster0.yr9jlgr.mongodb.net/d");



let db = mongoose.connection;

export default db;

