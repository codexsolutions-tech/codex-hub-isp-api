import { Router } from "express";
import { container } from "tsyringe";
import { authMiddleware } from "../middleware/authMiddleware";
import PainelController from "../controllers/Painel.controller";

const painelRouter = Router()
const painelController = container.resolve(PainelController);

painelRouter.post('/login', painelController.LoginPainel.bind(painelController))
painelRouter.post('/provedor/cadastrar', painelController.CadastrarProvedor.bind(painelController))
painelRouter.patch('/provedor/atualizar', authMiddleware, painelController.AtualizarProvedor.bind(painelController))
painelRouter.get('/provedor/temas', authMiddleware, authMiddleware, painelController.ObterTema.bind(painelController));
painelRouter.put('/provedor/temas', authMiddleware, painelController.AtualizarTema.bind(painelController));
painelRouter.get('/provedor/banners', authMiddleware, painelController.ObterBanner.bind(painelController));
painelRouter.get('/provedor/anuncios', authMiddleware, painelController.ObterAnuncios.bind(painelController) );
painelRouter.get('/provedor/indicacoes', authMiddleware, painelController.ObterIndicacoes.bind(painelController)) 
painelRouter.get('/provedor/avaliacoes', authMiddleware, painelController.ObterAvaliacaoServico.bind(painelController))

export default painelRouter;