import { inject, injectable } from "tsyringe";
import { provedorDto } from "../Dtos/provedorDto";
import IProvedorServices from "../interfaces/IProvedorServices";
import IProvedorRepository from "../../core/interfaces/IProvedorRepository";

@injectable()
export default class ProvedorServices implements IProvedorServices {
    
    private readonly _provedorRepository:IProvedorRepository;
    constructor(@inject("IProvedorRepository") provedorRepository:IProvedorRepository){
        this._provedorRepository = provedorRepository;
    }
    
    async ObterProvedor(codigoProvedor: string): Promise<provedorDto> {

        const result = await this._provedorRepository.ObterProvedor(codigoProvedor);
       
        const provedorDto:provedorDto = {
            nomeFantasia: result.NomeFantasia,
            gerenciador: result.Gerenciador,
            codigoApiGerenciador: result.ObterCodigoApiGerenciador(),
            chaveApiGerenciador: result.ObterChaveApiGerenciador(),
            status:result.Status
        }

        return provedorDto; 

    }

}