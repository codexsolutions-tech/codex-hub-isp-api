import { tokenDto } from "../Dtos/tokenDto";

export default interface ITokenService {
    ObterToken(codigoProvedor:string, cpf?:string):Promise<tokenDto>
}