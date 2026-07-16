
export default class Fatura {
    public Id:number = 0;
    public Valor:number = 0.0;
    public ValorPago:number = 0.0;
    public DataVencimento:string = "";
    public DataPagamento:string = "";
    public LinkFatura:string = "";
    public LinkFaturaPdf:string = "";
    public LinkRecibo:string = "";
    public QRCode:string = "";
    public QRCodeImagem:string = "";
    public LinhaDigitavel:string = "";
}