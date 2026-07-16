
import { clienteDto, planoDto, faturaDto } from "../../application/Dtos/clienteDto";
import Cliente from "../../core/domains/Cliente";
import Consumo from "../../core/domains/Consumo";
import Fatura from "../../core/domains/Fatura";
import Plano from "../../core/domains/Plano";
import DadosCadastraisVO from "../../core/valuesObjects/DadosCadastraisVO";
import EnderecoVo from "../../core/valuesObjects/EnderecoVO";
import { responseClienteResumo, fatura, mensalidade } from "../../infrastructure/apis/receitanet/responseModels/responseClienteResumo";

export function requestParaClienteDtotMapper(response:responseClienteResumo): clienteDto {


    return {
        dadosCadastrais: {
            nome: response.dados_cadastrais.nome,
            cpfCnpj: response.dados_cadastrais.cpfcnpj,
            dataNascimento: response.dados_cadastrais.data_nascimento,
            email: response.dados_cadastrais.email,
            inscricao: response.dados_cadastrais.inscricao,
        },
        isBloqueado: response.dados_cadastrais.isBloqueado,
        data_bloqueio: response.dados_cadastrais.data_bloqueio,
        endereco: {
            logradouro: response.dados_cadastrais.endereco,
            complemento: response.dados_cadastrais.complemento,
            bairro: response.dados_cadastrais.bairro,
            cidade: response.dados_cadastrais.cidade,
            uf: response.dados_cadastrais.uf,
            cep: ""
        },
        ultimasFaturas: response.ultimasFaturas.map((fat:fatura) : faturaDto => {
            return {
                id: fat.id,
                valor: fat.valor,
                valorPago: fat.valor_pago,
                dataVencimento: fat.data_vencimento,
                dataPagamento: fat.data_pagamento,
                linkFatura: fat.link_fatura,
                linkFaturaPdf: fat.link_fatura_pdf,
                linhaDigitavel: fat.linha_digitavel,
                linkRecibo:fat.link_recibo,
                qrCode: fat.qrcode,
                qrCodeImg: fat.qrcode_img
            }
        }),
        plano: response.mensalidades.map((plano:mensalidade) : planoDto => {
                return {
                    id: plano.id,
                    descricao: plano.descricao,
                    quantidade: plano.quantidade,
                    valor: plano.valor,
                    total: plano.total
                }
            } 
        ),
        consumos: {
            consumoMensalLabels: response.consumoMensalLabels,
            consumoMensalDown: response.consumoMensalDown,
            consumoMensalUp: response.consumoMensalUp
        }
    }
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
        isBloqueado: cliente.IsBloqueado,
        data_bloqueio: cliente.DataBloqueio,
        endereco: {
            logradouro: cliente.Endereco.Endereco,
            complemento: "",
            bairro: cliente.Endereco.Bairro,
            cidade: cliente.Endereco.Cidade,
            uf: cliente.Endereco.Uf,
            cep: null
        },
        ultimasFaturas: cliente.UtimasFaturas.map((fat) => {
            
            const fatura:faturaDto = {
                id: fat.Id,
                valor: fat.Valor,
                valorPago: fat.ValorPago,
                dataVencimento: fat.DataVencimento,
                dataPagamento: fat.DataPagamento,
                linkFatura: fat.LinkFatura,
                linkFaturaPdf: fat.LinkFaturaPdf,
                linkRecibo: fat.LinkRecibo,
                linhaDigitavel: fat.LinhaDigitavel,
                qrCode: fat.QRCode,
                qrCodeImg: fat.QRCodeImagem 
            }

            return fatura;
        }),
        plano: cliente.Produto.map((produto:Plano) => {
            const plano: planoDto = {
                id: produto.Id,
                descricao: produto.Descricao,
                quantidade: produto.Quantidade,
                valor: produto.Valor,
                total: produto.Total,
            }
            return plano
        }),
        consumos: {
            consumoMensalLabels: cliente.Consumo.ConsumoMensalLabels,
            consumoMensalDown: cliente.Consumo.ConsumoMensalDown,
            consumoMensalUp: cliente.Consumo.ConsumoMensalUp    
        }
        
    }

    return clienteDto;
}