import { inject, injectable } from "tsyringe";
import IProvedorServices from "../../application/interfaces/IProvedorServices";
import ProvedorServices from "../../application/services/ProvedorServices";
import { Request, Response } from "express";

@injectable()
export default class ProvedorController{

    private readonly _provedorService:IProvedorServices;
    constructor(@inject("IProvedorServices")provedorServices:ProvedorServices){
        this._provedorService = provedorServices;
    }

    async ObterProvedorPorCodigo(req:Request, res:Response){

        const codigoProvedor = req.params.codigoProvedor as string;
        const provedor = await this._provedorService.ObterProvedor(codigoProvedor)
    }
}