import { inject, injectable } from "tsyringe";
import IService from "../../application/interfaces/IService";
import { Request, Response } from "express";

@injectable()
export default class TokenController{

    private readonly _service:IService;
    
    constructor(@inject("IService")service:IService){
        this._service = service;
    }

    async ObterToken(req:Request, res:Response){

        const data = req.body;

        const token = await this._service.ObterToken(data.cpf, data.codigoProvedor)

        return res.status(200).json({token: token})
    }
}