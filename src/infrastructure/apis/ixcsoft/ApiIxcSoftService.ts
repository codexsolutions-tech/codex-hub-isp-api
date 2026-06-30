
import { inject, injectable } from "tsyringe";
import IProvedorRepository from "../../../core/interfaces/IProvedorRepository";
import { configRequest } from "../configRequest";
import RequestService from "../requesService";
import Provedor from "../../../core/domains/Provedor";
import { emethodHttp } from "../../../common/enuns/emethodhttp";
import { PadronizarCpf } from "../../../common/utilities/utils";
import IApiIxcSoftService from "./interfaces/IApiIxcSoftService";

@injectable()
export default class ApiIxcSoftService implements IApiIxcSoftService {

    private _provedorRepository:IProvedorRepository;

    constructor(@inject("IProvedorRepository") provedorRepository:IProvedorRepository){
        this._provedorRepository = provedorRepository;
    }
    
    async ObterClientePorCpfCnpj(cpfcnpj: string, codigoProvedor:string): Promise<any> {
        
        const provedor = await this._provedorRepository.ObterProvedor(codigoProvedor);
        const urlBase = `https://${provedor.DominioIxc}/webservice/v1/`;
        const service = new RequestService(urlBase);

        const configRequest:configRequest = {
            method: emethodHttp.POST,
            resource: "cliente",
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json',
                'Authorization': `Basic ${this.Token(provedor)}`,
                'ixcsoft': 'listar'
            },
            body: {
                qtype: "cliente.cnpj_cpf",
                query: PadronizarCpf(cpfcnpj),
                oper: "=",
                page: 1,
                rp: 10,
            }
        }

        const request = await service.Requst<any>(configRequest)
        return request;
    }

    public Token(provedor:Provedor): string {
        return  Buffer.from(`${provedor.ObterCodigoApiGerenciador()}:${provedor.ObterChaveApiGerenciador()}`).toString("base64");
    } 

}