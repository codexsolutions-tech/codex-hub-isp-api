import DadosCadastraisVO from "../valuesObjects/DadosCadastraisVO";
import EnderecoVo from "../valuesObjects/EnderecoVO";
import ServidorVO from "../valuesObjects/ServidorVO";
import Consumo from "./Consumo";
import Fatura from "./Fatura";
import Plano from "./Plano";

export default class Cliente {

    public DadosCadastrais:DadosCadastraisVO = new DadosCadastraisVO();
    public Endereco:EnderecoVo = new EnderecoVo()
    public UtimasFaturas:Fatura[] = [];
    public Consumo:Consumo = new Consumo();
    public Produto:Plano[] = [];
    public Servidor:ServidorVO = new ServidorVO();
    public Contrato:string = "";
    public FaturaVencida:boolean = false;
    public PromessaLiberado:boolean = true;
    public IsBloqueado: boolean = false;
    public DataBloqueio: Date = new Date();
}   
