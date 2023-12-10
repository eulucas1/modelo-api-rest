import express from "express";
import EmoresaCrontroller from "../controllers/empresaController.js";

const routes = express.Router();

routes.get("/empresas", EmoresaCrontroller.listarEmpresa);
routes.get("/empresas/:id", EmoresaCrontroller.listarEmpresaPorId);
routes.post("/empresas", EmoresaCrontroller.cadastrarEmpresa);
routes.put("/empresas/:id", EmoresaCrontroller.atualizarEmpresa);
routes.delete("/empresas/:id", EmoresaCrontroller.excluirEmpresa);

export default routes;