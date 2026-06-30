import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import IReceitanetServices from "../../application/interfaces/IReceitanetServicest";
import { reqBodyDadosClienteDto } from "../../application/Dtos/reqBodyDadosClienteDto";
import { eGerenciador } from "../../common/enuns/egerenciador";
import { retornoPadrao } from "../../application/Dtos/retornoPadrao";
import { clienteDto } from "../../application/Dtos/clienteDto";
import IIxcSoftServices from "../../application/interfaces/IIxcSoftServices";

@injectable()
export default class DadosClienteController {

    private readonly _receitaNetService:IReceitanetServices;
    private readonly _ixcSoftService:IIxcSoftServices;
    
    constructor(@inject("IReceitanetServices")receitaNetService:IReceitanetServices, @inject("IIxcSoftServices")ixcSoftService:IIxcSoftServices){
        this._receitaNetService = receitaNetService;
        this._ixcSoftService = ixcSoftService;
    }

    async ObterDadosCliente(req:Request, res:Response){

        const data:reqBodyDadosClienteDto = req.body;
        try {
            
            if(data.gerenciador === eGerenciador.RECEITANET){
                const result = await this._receitaNetService.ObterDadosCliente(data.token);
    
                const retorno: retornoPadrao<clienteDto> = {
                    statusCode:200,
                    message:"Dados Cliente "+ data.gerenciador,
                    data: result 
                }
    
                return res.json(retorno);
            }
    
            if(data.gerenciador === eGerenciador.IXCSOFT){
                const result = await this._ixcSoftService.ObterDadosCliente(data.cpfCnpj, data.codigoProvedor)
                
                const retorno: retornoPadrao<clienteDto> = {
                    statusCode:200,
                    message:"Dados Cliente "+ data.gerenciador,
                    data: result 
                }
    
                return res.json(retorno);
            }
        } catch (error) {

            const retorno: retornoPadrao<null> = {
                statusCode:500,
                message:"Dados Cliente "+ data.gerenciador,
                data: null 
            }
            
            return res.json(retorno);
        }


    }
}