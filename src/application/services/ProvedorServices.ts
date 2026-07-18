import { inject, injectable } from "tsyringe";
import { provedorDto, provedorPainelDto, temaDto } from "../Dtos/provedorDto";
import IProvedorServices from "../interfaces/IProvedorServices";
import IProvedorRepository from "../../core/interfaces/IProvedorRepository";
import { cadastroProvedorDto } from "../Dtos/cadastroProvedorDto";
import { cadastroProvedorModel } from "../../core/models/cadastroProvevedorModel";
import { themeModel } from "../../core/models/themeModel";
import { indicacaoModel } from "../../core/models/indicacaoModel";
import { avaliacaoModel } from "../../core/models/avaliacaoModel";

@injectable()
export default class ProvedorServices implements IProvedorServices {
    
    private readonly _provedorRepository:IProvedorRepository;
    
    constructor(@inject("IProvedorRepository") provedorRepository:IProvedorRepository){
        this._provedorRepository = provedorRepository;
    }    
    
    async Cadastrar(cadastro:cadastroProvedorDto): Promise<provedorPainelDto> {
        
        const novoProvedor =  await this._provedorRepository.Cadastrar({empresa: cadastro.empresa, cnpj: cadastro.cnpj, gerenciador: cadastro.gerenciador, nome_administrador: cadastro.nomeAdministrador, usuario: cadastro.usuario, senha: cadastro.senha})

        return {
            id: novoProvedor.Id,
            empresa: novoProvedor.Empresa,
            cnpj: novoProvedor.CpfCnpj,
            gerenciador: novoProvedor.Gerenciador,
            chave_api_gerenciador: novoProvedor.ObterChaveApiGerenciador(),
            codigo_api_gerenciador: novoProvedor.ObterCodigoApiGerenciador(),
            codigo_provedor: novoProvedor.ObterCodigoProvedor(),
            nome_administrador: novoProvedor.NomeAdministrador,
            nome_fantasia: novoProvedor.NomeFantasia,
            status: novoProvedor.Status,
            usuario: novoProvedor.Usuario,
            dominio_ixc: novoProvedor.DominioIxc,

        }
    }

    async Atualizar(update:cadastroProvedorModel) : Promise<provedorPainelDto> {
       
        const provedorAtualizado =  await this._provedorRepository.Atualizar(
            { 
                nome_fantasia: update.nome_fantasia, 
                nome_administrador: update.nome_administrador,
                codigo_api_gerenciador: update.codigo_api_gerenciador, 
                chave_api_gerenciador: update.chave_api_gerenciador, 
                codigo_provedor: update.codigo_provedor,
                usuario: update.usuario,
                senha: update.senha

            })

        return {
            id: provedorAtualizado.Id,
            empresa: provedorAtualizado.Empresa,
            cnpj: provedorAtualizado.CpfCnpj,
            gerenciador: provedorAtualizado.Gerenciador,
            chave_api_gerenciador: provedorAtualizado.ObterChaveApiGerenciador(),
            codigo_api_gerenciador: provedorAtualizado.ObterCodigoApiGerenciador(),
            codigo_provedor: provedorAtualizado.ObterCodigoProvedor(),
            nome_administrador: provedorAtualizado.NomeAdministrador,
            nome_fantasia: provedorAtualizado.NomeFantasia,
            status: provedorAtualizado.Status,
            usuario: provedorAtualizado.Usuario,
            dominio_ixc: provedorAtualizado.DominioIxc,

        }
    }

    async ObterProvedor(codigoProvedor: string): Promise<provedorDto> {

        const result = await this._provedorRepository.ObterProvedor(codigoProvedor);
       
        const provedorDto:provedorDto = {
            nomeFantasia: result.NomeFantasia,
            gerenciador: result.Gerenciador,
            codigoApiGerenciador: result.ObterCodigoApiGerenciador(),
            chaveApiGerenciador: result.ObterChaveApiGerenciador(),
            status:result.Status
        }

        return provedorDto; 

    }

    async ObterTema(codigo: string): Promise<temaDto> {

        const result = await this._provedorRepository.ObterTema(codigo);
        
        const tema:temaDto = {
            codigo: result.codigo,
            nome: result.nome,
            tag: result.tag,
            accent: result.accent,
            accent2: result.accent2,
            glyph: result.glyph,
            logo_url: result.logo_url
        }

        return tema;
    }

    async ObterBanners(codigo:string) : Promise<any> {
        return await this._provedorRepository.ObterBanners(codigo);
        
    }

    async ObterAnuncios(codigo: string): Promise<any> {
        return await this._provedorRepository.ObterAnuncios(codigo);
    }

    async AtualizarTema(tema:themeModel) : Promise<any> {
        return await this._provedorRepository.AlterarTema(tema);
    }

    async SalvarIndicacao(indicao:indicacaoModel) : Promise<number> {
        return await this._provedorRepository.SalvarIndicacao(indicao);
    }

    async ObterIndicacoes(codigoProvedor:string) : Promise<any> {
        return await this._provedorRepository.ObterIndicacoes(codigoProvedor);
    }

    async AvaliarServico(avaliacao: avaliacaoModel): Promise<any> {
        return await this._provedorRepository.AvaliarServico(avaliacao);
    }
    async ObterAvaliacoesServico(codigoProvedor: string): Promise<any> {
        return await this._provedorRepository.ObterAvaliacoesServico(codigoProvedor);
    }
    async AvaliarApp(avaliacao: avaliacaoModel): Promise<any> {
        return await this._provedorRepository.AvaliarApp(avaliacao);
    }
    async ObterAvaliacoesApp(codigoProvedor: string): Promise<any> {
        return await this._provedorRepository.ObterAvaliacoesApp(codigoProvedor);
    }

}