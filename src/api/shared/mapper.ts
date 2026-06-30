import { clienteDto } from "../../application/Dtos/clienteDto";
import Cliente from "../../core/domains/Cliente";
import Fatura from "../../core/domains/Fatura";
import DadosCadastraisVO from "../../core/valuesObjects/DadosCadastraisVO";
import EnderecoVo from "../../core/valuesObjects/EnderecoVO";

export function requestParaClientetMapper(request:any): Cliente {

    const dadosCadastrais= new DadosCadastraisVO();
    dadosCadastrais.Nome = request.dados_cadastrais.nome;
    dadosCadastrais.CpfCnpj = request.dados_cadastrais.cpfcnpj;
    dadosCadastrais.DataNascimento = request.dados_cadastrais.data_nascimento;
    dadosCadastrais.Email = request.dados_cadastrais.email;
    dadosCadastrais.Inscricao = request.dados_cadastrais.inscricao;
    
    const endereco = new EnderecoVo();
    endereco.Endereco = request.dados_cadastrais.endereco;
    endereco.Bairro = request.dados_cadastrais.bairro;
    endereco.Cidade = request.dados_cadastrais.cidade;
    endereco.Uf = request.dados_cadastrais.uf;
    
    const ultimasFaturas:[] = request.ultimasFaturas.map((fatura:any) => {
        
        const faturas = new Fatura();
        faturas.Id = fatura.id;
        faturas.Valor = fatura.valor;
        faturas.ValorPago = fatura.valor_pago;
        faturas.DataVencimento = fatura.data_vencimento;
        faturas.DataPagamento = fatura.data_pagamento;
        faturas.LinkFatura = fatura.link_fatura;
        faturas.LinkFaturaPdf = fatura.link_fatura_pdf;
        faturas.LinkRecibo = fatura.link_recibo;
        faturas.QRCode = fatura.qrcode;
        faturas.QRCodeImagem = fatura.qrcode_img;
        faturas.LinhaDigitavel = fatura.linha_digitavel;
        
        return faturas;
    })

    const cliente = new Cliente();
    cliente.DadosCadastrais = dadosCadastrais;
    cliente.Endereco = endereco;
    cliente.UtimasFaturas = ultimasFaturas;

    return cliente;
}

export function clienteParaClienteDtoMapper(cliente:Cliente) : clienteDto {
    const clienteDto:clienteDto = {
        dadosCadastrais: {
            nome: cliente.DadosCadastrais.Nome,
            cpfCnpj: cliente.DadosCadastrais.CpfCnpj,
            dataNascimento: cliente.DadosCadastrais.DataNascimento,
            email: cliente.DadosCadastrais.Email,
            inscricao: cliente.DadosCadastrais.Inscricao
        },
        endereco: {
            logradouro: cliente.Endereco.Endereco,
            complemento: "",
            bairro: cliente.Endereco.Bairro,
            cidade: cliente.Endereco.Cidade,
            uf: cliente.Endereco.Uf,
            cep: null
        }
    }

    return clienteDto;
}