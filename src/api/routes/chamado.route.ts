import { Router } from "express";
import { container } from "tsyringe";
import ChamadoController from "../controllers/Chamado.controller";

const chamadoRoute = Router()
const chamadoController = container.resolve(ChamadoController);

chamadoRoute.post("/", chamadoController.ObterChamados.bind(chamadoController));
chamadoRoute.post("/novo", chamadoController.AbrirNovoChamados.bind(chamadoController));
chamadoRoute.post("/mensagem/enviar", chamadoController.EnviarMensagmChamado.bind(chamadoController));
chamadoRoute.post("/mensagem/receber", chamadoController.ReceberRespostasChamado.bind(chamadoController));

export default chamadoRoute;