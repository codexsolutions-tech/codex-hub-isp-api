import { Router } from "express";
import { container } from "tsyringe";
import ClienteController from "../controllers/Cliente.controller";

const clienteRoute = Router();
const clienteController = container.resolve(ClienteController);

clienteRoute.post("/dados-cliente", clienteController.ObterDadosCliente.bind(clienteController));
clienteRoute.post('/faturas', clienteController.ObterFaturas.bind(clienteController));

export default clienteRoute;