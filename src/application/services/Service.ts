import { inject, injectable } from "tsyringe";
import IService from "../interfaces/IService";
import IReceitanetServices from "../../infrastructure/apis/receitanet/interface/IReceitanetServices";
import { tokenDto } from "../Dtos/tokenDto";

@injectable()
export default class Service implements IService {
    
    private readonly _servicesReceitaNet:IReceitanetServices

    constructor(@inject("IReceitanetServices")serviceReceitaNet:IReceitanetServices){
        this._servicesReceitaNet = serviceReceitaNet;
    }
    
    
    async ObterToken(cpf: string, codigoProvedor: string): Promise<tokenDto> {
        
        const token = await this._servicesReceitaNet.ObterToken(cpf, codigoProvedor);

        return token;
    }
    
}