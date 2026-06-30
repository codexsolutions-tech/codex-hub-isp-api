import { Router } from "express";
import { container } from "tsyringe";
import TokenController from "../controllers/Token.controller";

const tokenRoute = Router();

const tokenController = container.resolve(TokenController);

tokenRoute.post('/token', tokenController.ObterToken.bind(tokenController));

export default tokenRoute;