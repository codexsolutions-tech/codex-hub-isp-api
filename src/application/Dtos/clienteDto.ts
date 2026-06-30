export type clienteDto = {
    dadosCadastrais:dadosCadastrais;
    endereco:endereco,
    plano?:plano,
    servidor?:servidor,
    consumos?:consumos,
    ultimasFaturas?:fatura[]
}

type dadosCadastrais = {
    nome:string,
    cpfCnpj:string,
    email:string,
    dataNascimento:string,
    inscricao:string|null
}

type endereco = {
    logradouro:string,
    complemento:string,
    bairro:string,
    cidade:string,
    uf:string,
    cep:string|null
}

type plano = {
    id:number,
    descricao:string,
    valor:string,
    quantidade:number,
    total:string
}

type servidor = {
    isManutencao:boolean,
    manutencaoMensagem:string
}
type consumos = {
    consumoMensalLabels:string[],
    consumoMensalDown:number[],
    consumoMensalUp:number[]
}
type fatura = {
    id:number,
    valor:number,
    valorPago:number,
    dataVencimento:string,
    dataPagamento:string | null,
    linkFatura:string,
    linkFaturaPdf:string,
    linkRecibo:string,
    qrCode:string,
    qrCodeImg:string,
    linhaDigitavel:string
}
