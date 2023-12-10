import mongoose from "mongoose";
import { empresaSchema } from "./Empresa.js";

const celularSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  modelo: { type: String, required: true },
  sistema: { type: String },
  preco: { type: Number },
  armazenamento: { type: Number },
  empresa: empresaSchema
}, { versionKey: false });

const celular = mongoose.model("celulares", celularSchema);

export default celular;
