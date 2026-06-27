import { tokenDto } from "../Dtos/tokenDto";

export default interface IService {
    ObterToken(cpf:string, codigoProvedor:string) : Promise<tokenDto>
}