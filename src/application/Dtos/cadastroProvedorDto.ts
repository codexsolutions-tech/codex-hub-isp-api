import { eGerenciador } from "../../common/enuns/egerenciador";
import { estatus } from "../../common/enuns/estatus";

export type cadastroProvedorDto = {
    empresa?:string, 
    nomeFantasia?:string, 
    codigoProvedor?:number, 
    //status?:estatus, 
    gerenciador?:eGerenciador, 
    codigoApiGerenciador?:number, 
    chaveApiGerenciador?:string, 
    nomeAdministrador?:string, 
    cnpj?:string, 
    dominio?:string, 
    usuario?:string,
    senha?:string;
}