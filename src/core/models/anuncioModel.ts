export type anuncioModel = {
    id:string;
    titulo:string;
    subtitulo:string;
    descricao:string;
    link_imagem:string;
    link_acao:string;
    codigo_provedor_fk:number;
    tipo:string;
    ativo:boolean;
}