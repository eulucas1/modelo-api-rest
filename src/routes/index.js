import express from "express";
import celulares from "./celularesRoutes.js";
import empresas from "./empresasRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("API para PSolutions"));

  app.use(express.json(), celulares, empresas);
};

export default routes;
