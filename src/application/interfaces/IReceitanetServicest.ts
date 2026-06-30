import { clienteDto } from "../Dtos/clienteDto";
import { tokenDto } from "../Dtos/tokenDto";

export default interface IReceitanetServices {
    ObterToken(cpf:string, codigoProvedor:string) : Promise<tokenDto>
    ObterDadosCliente(token:string): Promise<clienteDto>
}