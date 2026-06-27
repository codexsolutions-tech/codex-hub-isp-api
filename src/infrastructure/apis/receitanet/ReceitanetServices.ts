import { inject, injectable } from "tsyringe";
import IReceitanetServices from "./interface/IReceitanetServices";
import RequestService from "../requesService";
import { configRequest } from "../configRequest";
import { emethodHttp } from "../../../common/enuns/emethodhttp";
import { PadronizarCpf, SomenteNumeros } from "../../../common/utilities/utils";
import IProvedorRepository from "../../../core/interfaces/IProvedorRepository";
import { eGerenciador } from "../../../common/enuns/egerenciador";
import { Token } from "./Token";

@injectable()
export default class ReceitanetServices implements IReceitanetServices {
    
    private _provedorRepository:IProvedorRepository;

    constructor(@inject("IProvedorRepository") provedorRepository:IProvedorRepository){
        this._provedorRepository = provedorRepository;
    }

    async ObterToken(cpf:string, codigoProvedor:string): Promise<any> {

        const provedor = await this._provedorRepository.ObterProvedor(codigoProvedor);
        const service = new RequestService("https://api.receitanet.net/centralassinante/v1");
        
        const codigo = provedor.ObterCodigoApiGerenciador();
        const secret = provedor.ObterChaveApiGerenciador();//"d602T0QTI4ai9tzVVNPeiv336roJOG4Ppj2kWm4rkFgSBVFUDjmYKV0t1oFVlID8n9tYDbHnMSUa7iBwMIdjA02jAJC1dEYGX9Kz";

        const configRequest: configRequest = {
            method: emethodHttp.POST,
            resource: "token",
            body: { 
                "grant_type": "password",
                "client_id": codigo,
                "client_secret": secret,
                "cpfcnpj": provedor.Gerenciador === eGerenciador.IXCSOFT ? PadronizarCpf(cpf) : SomenteNumeros(cpf)
            }
        }

        const response = await service.Requst<Token>(configRequest);

        return response;
    }

}