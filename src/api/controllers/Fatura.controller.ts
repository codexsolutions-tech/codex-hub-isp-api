import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import IReceitanetServices from "../../application/interfaces/IReceitanetServicest";
import { eGerenciador } from "../../common/enuns/egerenciador";
import { retornoPadrao } from "../../application/Dtos/retornoPadrao";
import IIxcSoftServices from "../../application/interfaces/IIxcSoftServices";

@injectable()
export default class ClienteController {

    private readonly _receitaNetService:IReceitanetServices;
    private readonly _ixcSoftService:IIxcSoftServices;
    
    constructor(@inject("IReceitanetServices")receitaNetService:IReceitanetServices, @inject("IIxcSoftServices")ixcSoftService:IIxcSoftServices){
        this._receitaNetService = receitaNetService;
        this._ixcSoftService = ixcSoftService;
    }

    async ObterFaturas(req:Request, res:Response){

        const data = req.body;
        if(data.gerenciador === eGerenciador.RECEITANET){

            const faturas = await this._receitaNetService.ObterFaturas(data.token)
            const retorno: retornoPadrao<any> = {
                    statusCode:200,
                    message:"Faturas "+ data.gerenciador,
                    data: faturas 
                }
    
                return res.json(retorno);
        }

        if(data.gerenciador === eGerenciador.IXCSOFT){

            const faturas = await this._ixcSoftService.ObterFaturas(data.cpfCnpj, data.codigoProvedor);
            const retorno: retornoPadrao<any> = {
                    statusCode:200,
                    message:"Faturas "+ data.gerenciador,
                    data: faturas 
                }
    
                return res.json(retorno);
        }
    }
}