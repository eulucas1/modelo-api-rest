import mongoose from "mongoose";

const empresaSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nome: { type: String, required: true },
  pais: { type: String }
}, { versionKey: false });

const empresa = mongoose.model("empresas", empresaSchema);

export { empresa, empresaSchema };
