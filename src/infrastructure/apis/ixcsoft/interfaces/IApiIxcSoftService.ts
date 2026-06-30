import Provedor from "../../../../core/domains/Provedor";

export default interface IApiIxcSoftService {
    Token(provedor:Provedor): string;
    ObterClientePorCpfCnpj(cpfcnpj:string, codigoProvedor:string):Promise<any>
}