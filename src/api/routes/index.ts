import { Router } from "express";
import tokenRoute from "./token.route";

const routes = Router();

routes.use("/login", tokenRoute);

export default routes;