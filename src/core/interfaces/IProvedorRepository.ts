import Provedor from "../domains/Provedor";

export default interface IProvedorRepository{
    ObterProvedor(codigoProvedor:string): Promise<Provedor>
}