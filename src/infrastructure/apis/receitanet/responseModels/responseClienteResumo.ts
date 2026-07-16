export type responseClienteResumo = {

    ultimasFaturas: fatura[];
    isFaturaVencida: boolean;
    isPromessaLiberado: boolean;
    consumoMensalLabels:string[];
    consumoMensalDown:number[];
    consumoMensalUp:number[];
    mensalidades: mensalidade[];
    contrato: string;
    servidor: servidor[];
    dados_cadastrais:dados_cadastrais,
    isBloqueado: boolean;
    data_bloqueio: Date;
}

export type dados_cadastrais = {
    nome: string;
    cpfcnpj: string;
    inscricao: string;
    email: string;
    data_nascimento: string;
    endereco: string;
    complemento: string;
    bairro: string;
    cidade: string;
    uf: string;
    isBloqueado: boolean;
    data_bloqueio: Date;
}

export type servidor = {
    isManutencao: string;
    manutencaoMensagem: string;        
}

export type mensalidade = {
    id: number;
    descricao: string;
    valor: number;
    quantidade: number;
    total: number;
}

export type consumos = {
    consumoMensalLabels:string[],
    consumoMensalDown:number[],
    consumoMensalUp:number[]
}

export type fatura = {
    id:number,
    valor:number,
    valor_pago:number,
    data_vencimento:string | null,
    data_pagamento:string | null,
    link_fatura:string,
    link_fatura_pdf:string,
    link_recibo:string,
    qrcode:string | null,
    qrcode_img:string | null,
    linha_digitavel:string
}