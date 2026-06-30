import { inject, injectable } from "tsyringe";
import { tokenDto } from "../Dtos/tokenDto";
import Cliente from "../../core/domains/Cliente";
import IReceitanetServices from "../interfaces/IReceitanetServicest";
import { clienteDto } from "../Dtos/clienteDto";
import IApiReceitanetServices from "../../infrastructure/apis/receitanet/interface/IApiReceitanetServices";
import { clienteParaClienteDtoMapper } from "../../api/shared/mapper";

@injectable()
export default class ReceitanetServices implements IReceitanetServices {
    
    private readonly _servicesReceitaNet:IApiReceitanetServices

    constructor(@inject("IApiReceitanetServices")serviceReceitaNet:IApiReceitanetServices){
        this._servicesReceitaNet = serviceReceitaNet;
    }

    async ObterDadosCliente(token: string): Promise<clienteDto> {
        
        const request = await this._servicesReceitaNet.ObterDadosCliente(token);
        
       return clienteParaClienteDtoMapper(request);
    }
    
    async ObterToken(cpf: string, codigoProvedor: string): Promise<tokenDto> {
        
        const token = await this._servicesReceitaNet.ObterToken(cpf, codigoProvedor);

        return token;
    }
    
}