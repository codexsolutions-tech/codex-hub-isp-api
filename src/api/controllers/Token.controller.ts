import { inject, injectable } from "tsyringe";
import ITokenService from "../../application/interfaces/ItokenService";
import { Request, Response } from "express";
import { retornoPadrao } from "../../application/Dtos/retornoPadrao";
import { tokenDto } from "../../application/Dtos/tokenDto";

@injectable()
export default class TokenController{

    private readonly _tokenService:ITokenService;
    
    constructor(@inject("ITokenService")tokenService:ITokenService){
        this._tokenService = tokenService;
    }

    async ObterToken(req:Request, res:Response){

        const data = req.body;

        const token = await this._tokenService.ObterToken(data.codigoProvedor, data.cpfCnpj);

        if(token){
            const retorno: retornoPadrao<tokenDto> = {
                statusCode: 200,
                message: "Token obtido com sucesso.",
                data: {
                    gerenciador: token.gerenciador,
                    token: token.token,
                    name: token.name,
                    isContrassenha: token.isContrassenha
                }
            }
            return res.json(retorno);
        }

        const retorno: retornoPadrao<null> = {
            statusCode: 500,
            message: "Erro ao obter Token.",
            data: null
        }
        return res.json(retorno);
    }
}