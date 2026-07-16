import { inject, injectable } from "tsyringe";
import IReceitanetServices from "../../application/interfaces/IReceitanetServicest";
import IIxcSoftServices from "../../application/interfaces/IIxcSoftServices";
import { abrirChamadoRequest, chamadoDto } from "../../application/Dtos/chamadoDto";
import { retornoPadrao } from "../../application/Dtos/retornoPadrao";
import { Request, Response } from "express";
import { boletos } from "../../application/Dtos/boletosDto";
@injectable()
export default class ChamadoController{
    
    private readonly _receitaNetService:IReceitanetServices;
    private readonly _ixcSoftService:IIxcSoftServices;
    
    constructor(@inject("IReceitanetServices")receitaNetService:IReceitanetServices, @inject("IIxcSoftServices")ixcSoftService:IIxcSoftServices){
        this._receitaNetService = receitaNetService;
        this._ixcSoftService = ixcSoftService;
    }

    async AbrirNovoChamados(req:Request, res: Response){

        const data:abrirChamadoRequest = req.body;

        const protocolo = await this._receitaNetService.AbrirNovoChamado(data.token, data.payload);

        const retorno: retornoPadrao<number> = {
                            statusCode:200,
                            message:"Dados Cliente ",
                            data: protocolo 
                        }
            
        return res.json(retorno);

    }
    async ObterChamados(req:Request, res: Response){

        const data = req.body;
        const chamados = await this._receitaNetService.ObterChamados(data.token);

        const retorno: retornoPadrao<chamadoDto[]> = {
            statusCode:200,
            message:"Chamados",
            data: chamados 
        }
            
        return res.json(retorno);

    }

    async EnviarMensagmChamado(req: Request, res: Response){
        const data = req.body;
        const mensagemEnviada = await this._receitaNetService.EnviarRespostaChamado(data.token.token, data.idChamado, data.mensagem);
        
        const retorno: retornoPadrao<string> = {
            statusCode:200,
            message:"Mensagem enviada",
            data: mensagemEnviada 
        }
            
        return res.json(retorno);
    }

    async ReceberRespostasChamado(req:Request, res:Response){
        const data = req.body;
        const respostas = await this._receitaNetService.RespostasDoChamado(data.token.token, data.idChamado);
        
        const retorno: retornoPadrao<string> = {
            statusCode:200,
            message:"Respostas",
            data: respostas 
        }
            
        return res.json(retorno);
    }
}