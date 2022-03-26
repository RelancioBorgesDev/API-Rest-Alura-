//4:00
import mongoose from "mongoose"

mongoose.connect("mongodb+srv://Relnc:123@cluster0.p5nij.mongodb.net/alura-node");

let db = mongoose.connection;

export default db