import { avaliacaoModel } from "../../core/models/avaliacaoModel";
import { cadastroProvedorModel } from "../../core/models/cadastroProvevedorModel";
import { indicacaoModel } from "../../core/models/indicacaoModel";
import { themeModel } from "../../core/models/themeModel";
import { cadastroProvedorDto } from "../Dtos/cadastroProvedorDto";
import { provedorDto, provedorPainelDto, temaDto } from "../Dtos/provedorDto";

export default interface IProvedorServices {
    Cadastrar(cadastro:cadastroProvedorDto): Promise<provedorPainelDto>
    Atualizar(update:cadastroProvedorModel) : Promise<provedorPainelDto>
    ObterProvedor(codigoProvedor:string) : Promise<provedorDto>;
    ObterTema(codigo:string) : Promise<temaDto>;
    ObterBanners(codigo:string) : Promise<any> ;
    ObterAnuncios(codigo:string) : Promise<any> ;
    SalvarIndicacao(indicao:indicacaoModel) : Promise<number>
    ObterIndicacoes(codigoProvedor:string) : Promise<any>
    AtualizarTema(tema:themeModel) : Promise<any> 
    AvaliarServico(avaliacao:avaliacaoModel) : Promise<any> 
    ObterAvaliacoesServico(codigoProvedor:string) : Promise<any>
    AvaliarApp(avaliacao:avaliacaoModel) : Promise<any> 
    ObterAvaliacoesApp(codigoProvedor:string) : Promise<any>
}