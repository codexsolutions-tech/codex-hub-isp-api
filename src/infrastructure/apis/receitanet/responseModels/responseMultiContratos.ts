export type multiplos = {
    contratos: contrato[];
    multiploCadastro:boolean;
}

export type contrato = {

    id:number
    nome:string
    login:string
    endereco:string
    complemento:string
    cidade:string
    bairro:string
    uf:string
}