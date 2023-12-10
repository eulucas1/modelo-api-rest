import express from "express";
import CelularController from "../controllers/celularController.js";

const routes = express.Router();

routes.get("/celulares", CelularController.listarCelulares);
routes.get("/celulares/busca", CelularController.listarCelularesPorSitema);
routes.get("/celulares/:id", CelularController.listarCelularPorId);
routes.post("/celulares", CelularController.cadastrarCelular );
routes.put("/celulares/:id", CelularController.atualizarCelular);
routes.delete("/celulares/:id", CelularController.excluirCelular);

export default routes;
