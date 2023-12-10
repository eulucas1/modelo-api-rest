import celular from "../models/Celular.js";
import { empresa } from "../models/Empresa.js";

class CelularController {

  static async listarCelulares (req, res) {
    try {
      const listaCelulares = await celular.find({});
      res.status(200).json(listaCelulares);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição` });
    }
  };

  static async listarCelularPorId (req, res) {
    try {
      const id = req.params.id;
      const celularEncontrado = await celular.findById(id);
      res.status(200).json(celularEncontrado);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição do celular` });
    }
  };

  static async cadastrarCelular (req, res) {
    const novoCelular = req.body;
    try {
      const empresaEncontrada = await empresa.findById(novoCelular.empresa);
      const celularCompleto = { ...novoCelular, empresa: { ...empresaEncontrada._doc }};
      const celularCriado = await celular.create(celularCompleto);
      res.status(201).json({ message: "criado com sucesso", celular: celularCriado });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha ao cadastrar celular` });
    }
  }

  static async atualizarCelular (req, res) {
    try {
      const id = req.params.id;
      await celular.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "celular atualizado" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na atualização` });
    }
  };

  static async excluirCelular (req, res) {
    try {
      const id = req.params.id;
      await celular.findByIdAndDelete(id);
      res.status(200).json({ message: "celular excluído com sucesso" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na exclusão` });
    }
  };

  static async listarCelularesPorSitema (req, res) {
    const sistema = req.query.sistema;
    try {
      const celularPorSistema = await celular.find({ sistema: sistema });
      res.status(200).json(celularPorSistema);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na busca` });
    }
  }
};

export default CelularController;
