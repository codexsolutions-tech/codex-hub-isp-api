import Cliente from "../../../../core/domains/Cliente";

export default interface IApiReceitanetServices {
    ObterToken(codigoProvedor:string, cpf?:string):Promise<any>;
    ObterDadosCliente(cpf:string): Promise<Cliente>
}