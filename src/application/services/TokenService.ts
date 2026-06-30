import { inject, injectable } from "tsyringe";
import { tokenDto } from "../Dtos/tokenDto";
import ITokenService from "../interfaces/ItokenService";
import IApiIxcSoftService from "../../infrastructure/apis/ixcsoft/interfaces/IApiIxcSoftService";
import IApiReceitanetServices from "../../infrastructure/apis/receitanet/interface/IApiReceitanetServices";
import IProvedorRepository from "../../core/interfaces/IProvedorRepository";
import { eGerenciador } from "../../common/enuns/egerenciador";

@injectable()
export default class TokenService implements ITokenService {
   
    private readonly _apiIxcSoft:IApiIxcSoftService;
    private readonly _apiReceitaNet:IApiReceitanetServices;
    private readonly _provedorRepository:IProvedorRepository;
    
    constructor(@inject("IApiIxcSoftService")apiIxcSoft:IApiIxcSoftService, @inject("IApiReceitanetServices")apiReceitaNet:IApiReceitanetServices, @inject("IProvedorRepository")provedorRepository:IProvedorRepository){
        this._apiIxcSoft = apiIxcSoft;
        this._apiReceitaNet = apiReceitaNet;
        this._provedorRepository = provedorRepository;
    }

    async ObterToken(codigoProvedor: string, cpf?: string): Promise<tokenDto> {
        
        const provedor = await this._provedorRepository.ObterProvedor(codigoProvedor);
       
        if(provedor === null) 
            throw new Error("Provedor não encontrado.");

        const tokenDto: tokenDto = {
            gerenciador: provedor.Gerenciador,
            token: ""
        };

        if(provedor.Gerenciador === eGerenciador.IXCSOFT){
            const token = this._apiIxcSoft.Token(provedor);
            tokenDto.token = token;
            tokenDto.name = "";
            tokenDto.isContrassenha = false;
            return tokenDto
        }

        const token = await this._apiReceitaNet.ObterToken(codigoProvedor, cpf);
        tokenDto.token = token.access_token;
        tokenDto.name = token.name;
        tokenDto.isContrassenha = token.isContrassenha
        return tokenDto;
    }

}