export type queryBody = {
    qtype: string,
    query: string,
    oper: operadores,
    page?: number,
    rp?: number,
    sortname?:string,
    sortorder: ordenacao;
    grid_param?: grid_param[],
}

export type queryParam = {
    grid_param: grid_param[]
}

export type grid_param = {
    TB:string,
    OP:operadores,
    P:string
}

export enum ordenacao {
    MAIOR_MENOR = "asc",
    MENOR_MAIOR = "desc"
}

export enum operadores {
    IGUAL = "=",
    DIFERENTE = "!=",
    MAIOR = ">",
    MENOR = "<",
    MAIOR_OU_IGUAL = ">=",
    MENOR_OU_IGUAL = "<=",
    CONTEM = "L",
    NAO_CONTEM = "NL",
    CONTIDO = "IN",
    NAO_CONTIDO = "NI",
    ENTRE = "B",
    NAO_ESTA_ENTRE = "NBE"
}
