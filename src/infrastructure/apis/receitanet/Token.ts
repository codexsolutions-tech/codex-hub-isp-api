export type Token = {
    access_token:string;
    name:string;
    isContrassenha:boolean;
    contratos?: contratoLogin[];
    multiploCadastro?:boolean;
}

export type contratoLogin = {
    id:number;
    nome:string;
    login:string;
    endereco:string;
    complemento:string;
    cidade:string;
    bairro:string;
    uf:string;
}