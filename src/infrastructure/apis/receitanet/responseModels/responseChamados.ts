export type responseChamados = {
    chamados: chamado[];
    is_criar_novo: boolean;    
}

export type chamado = {
    id: number;
    is_aberto:boolean;
    descricao: string;
    protocolo: string;
    respostas_status: number
}