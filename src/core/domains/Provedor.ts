import { UUIDTypes, v4 as uuidv4 } from 'uuid';
import { estatus } from '../../common/enuns/estatus';
import { eGerenciador } from '../../common/enuns/egerenciador';

export default class Provedor {

    public Id:UUIDTypes;
    public Empresa:string;
    public NomeFantasia:string;
    private CodigoProvedor:number;
    public Status:estatus;
    public Gerenciador:eGerenciador;
    private CodigoApiGerenciador:number;
    private ChaveApiGerenciador:string;
    public NomeAdministrador:string;
    public CpfCnpj:string;
    public DominioIxc?:string;

    constructor(empresa:string, nomeFantasia:string, codigoProvedor:number, status:estatus, gerenciador:eGerenciador, codigoApiGerenciador:number, chaveApiGerenciador:string, nomeAdministrador:string, cpfcnpj:string, dominio:string = ""){
        this.Id = uuidv4();
        this.Empresa = empresa;
        this.NomeFantasia = nomeFantasia;
        this.CodigoProvedor = codigoProvedor
        this.Status = status;
        this.Gerenciador = gerenciador;
        this.CodigoApiGerenciador = codigoApiGerenciador;
        this.ChaveApiGerenciador = chaveApiGerenciador;
        this.NomeAdministrador = nomeAdministrador;
        this.CpfCnpj = cpfcnpj;
        this.DominioIxc = dominio

    }

    public AlterarStatus() : void {
        if(this.Status == estatus.ATIVO)
            this.Status = estatus.INATIVO
        else
            this.Status = estatus.ATIVO
    }

    public ObterCodigoApiGerenciador(){
        return this.CodigoApiGerenciador;
    }
    public ObterCodigoProvedor(){
        return this.CodigoProvedor;
    }

    public ObterChaveApiGerenciador(){
        return this.ChaveApiGerenciador;
    }


}