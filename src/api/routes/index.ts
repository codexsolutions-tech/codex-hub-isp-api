import { Router } from "express";
import dadosClienteRoute from "./dadosCliente.route";
import tokenRoute from "./token.route";

const routes = Router();

routes.use('/login', tokenRoute)
routes.use("/", dadosClienteRoute);

export default routes;