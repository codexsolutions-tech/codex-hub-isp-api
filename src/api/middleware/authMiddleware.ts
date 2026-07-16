import { Response, NextFunction } from "express";
import { AuthRequest } from "./IAuthRequest";
import jwt from 'jsonwebtoken'
import "dotenv/config";

export function authMiddleware(req: AuthRequest, res: Response, next: NextFunction){

      const authHeader = req.headers.authorization;

      if (!authHeader)
        return res.status(401).json({
            message: "Token não informado"
        });

     const [, token] = authHeader.split(" ");

     try {

        const payload = jwt.verify(
            token,
            process.env.ACCESS_SECRET!
        ) as any;

        req.usuario = payload;

        next();

    } catch {

        return res.status(401).json({
            message: "Token inválido"
        });

    }

}
