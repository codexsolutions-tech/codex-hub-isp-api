export default interface IReceitanetServices {
    ObterToken(cpf:string, codigoProvedor:string):Promise<any>;
}