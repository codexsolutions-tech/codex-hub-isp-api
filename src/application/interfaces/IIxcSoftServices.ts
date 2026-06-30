import { clienteDto } from "../Dtos/clienteDto"

export default interface IIxcSoftServices {
    ObterToken(codigoProvedor:string) : Promise<string>;
    ObterDadosCliente(cpf:string, token:string) : Promise<clienteDto>;    
}