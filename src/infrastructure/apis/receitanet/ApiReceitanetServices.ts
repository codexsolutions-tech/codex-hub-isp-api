import { inject, injectable } from "tsyringe";
import RequestService from "../requesService";
import { configRequest } from "../configRequest";
import { emethodHttp } from "../../../common/enuns/emethodhttp";
import { PadronizarCpf, SomenteNumeros } from "../../../common/utilities/utils";
import IProvedorRepository from "../../../core/interfaces/IProvedorRepository";
import { Token } from "./Token";
import IApiReceitanetServices from "./interface/IApiReceitanetServices";
import Cliente from "../../../core/domains/Cliente";
import DadosCadastraisVO from "../../../core/valuesObjects/DadosCadastraisVO";
import Fatura from "../../../core/domains/Fatura";
import EnderecoVo from "../../../core/valuesObjects/EnderecoVO";
import { requestParaClientetMapper } from "../../../api/shared/mapper";

@injectable()
export default class ApiReceitanetServices implements IApiReceitanetServices {
    
    private _provedorRepository:IProvedorRepository;
    private readonly requestService:RequestService;
    constructor(@inject("IProvedorRepository") provedorRepository:IProvedorRepository){
        this._provedorRepository = provedorRepository;
        this.requestService = new RequestService("https://api.receitanet.net/centralassinante/v1/");
    }

    
    async ObterToken(codigoProvedor:string, cpf:string): Promise<Token> {
        
        const provedor = await this._provedorRepository.ObterProvedor(codigoProvedor);
               
        const codigo = provedor.ObterCodigoApiGerenciador();
        const secret = provedor.ObterChaveApiGerenciador();
        
        const configRequest: configRequest = {
            method: emethodHttp.POST,
            resource: "token",
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: { 
                "grant_type": "password",
                "client_id": codigo,
                "client_secret": secret,
                "cpfcnpj": SomenteNumeros(cpf)
            }
        }
        
        const token = await this.requestService.Requst<Token>(configRequest);
        
        if(token.access_token){
            return token
        }

        return token;
    }

    async ObterDadosCliente(token: string): Promise<Cliente> {       
   
        const configRequest:configRequest = {
            method: emethodHttp.GET,
            resource: "cliente/resumo",
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }

        const request = await this.requestService.Requst<any>(configRequest);
        
        return requestParaClientetMapper(request);

       }

}