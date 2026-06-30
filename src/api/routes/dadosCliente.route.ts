import { Router } from "express";
import { container } from "tsyringe";
import DadosClienteController from "../controllers/DadosCliente.controller";

const dadosCliente = Router();
const dadosClienteController = container.resolve(DadosClienteController);

dadosCliente.post("/dados-cliente", dadosClienteController.ObterDadosCliente.bind(dadosClienteController));

export default dadosCliente;