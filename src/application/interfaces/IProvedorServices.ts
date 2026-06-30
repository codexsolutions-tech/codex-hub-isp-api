import { provedorDto } from "../Dtos/provedorDto";

export default interface IProvedorServices {
    ObterProvedor(codigoProvedor:string) : Promise<provedorDto>;
}