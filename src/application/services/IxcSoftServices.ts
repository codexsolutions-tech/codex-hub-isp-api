import { inject, injectable } from "tsyringe";
import IApiIxcSoftService from "../../infrastructure/apis/ixcsoft/interfaces/IApiIxcSoftService";
import { clienteDto } from "../Dtos/clienteDto";
import IIxcSoftServices from "../interfaces/IIxcSoftServices";
import IProvedorRepository from "../../core/interfaces/IProvedorRepository";

@injectable()
export default class IxcSoftServices implements IIxcSoftServices{

    private readonly _apiIxcSoft:IApiIxcSoftService;
    private readonly _provedroRepository:IProvedorRepository;
    constructor(@inject("IApiIxcSoftService")apiIxcSofit:IApiIxcSoftService, @inject("IProvedorRepository")provedorRepository:IProvedorRepository){
        this._apiIxcSoft = apiIxcSofit;
        this._provedroRepository = provedorRepository;
    }

    async ObterDadosCliente(cpf: string, codigoProvedor: string): Promise<clienteDto> {

        const result = await this._apiIxcSoft.ObterClientePorCpfCnpj(cpf, codigoProvedor);
        const cliente = result.registros[0]
        
        const clienteDto:clienteDto = {
            dadosCadastrais :{
                nome: cliente.razao,
                cpfCnpj: cliente.cnpj_cpf,
                dataNascimento: "",
                email: "",
                inscricao: ""
            },
            endereco:{
                logradouro: `${cliente.endereco} - ${cliente.numero}`,
                complemento: cliente.complemento,
                bairro: cliente.bairro,
                cidade: cliente.cidade,
                uf: cliente.uf,
                cep: cliente.cep
                
            }
        }

        return clienteDto;
    }
    
    async ObterToken(codigoProvedor: string): Promise<string> {

        const provedor = await this._provedroRepository.ObterProvedor(codigoProvedor);
        return this._apiIxcSoft.Token(provedor);
    }
}