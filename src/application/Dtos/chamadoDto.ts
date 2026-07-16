export type chamadoDto = {
    id: number,
    protocolo: string,
    descricao: string,
    status: string,
    respostasStatus: number
}

export type abrirChamadoRequest = {
    gerenciador:string;
    token:string;
    payload:object;
}

export type payload = {
    assunto:string;
    categoria:string;
    descricao:string;
    dataAbertura: string;
}