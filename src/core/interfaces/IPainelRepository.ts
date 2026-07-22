import { anuncioModel } from "../models/anuncioModel";
import { bannerModel } from "../models/bannerModel";

export default interface IPainelRepository {
   
    // ANUNCIOS
    GravarAnuncio(anuncio:anuncioModel) : Promise<anuncioModel>
    ObterAnuncios(codigoProvedor: number) : Promise<anuncioModel[]>
    ObterAnuncioPorId(idAnuncio:number, codigoProvedor: number) : Promise<anuncioModel>
    EditarAnuncio(anuncio:anuncioModel) : Promise<anuncioModel>
    ExcluiAnuncio(idAnuncio:string, codigoProvedor:number) : Promise<any>

    // BANNERS
    GravarBanner(anuncio:bannerModel) : Promise<bannerModel>
    ObterBanners(codigoProvedor: number) : Promise<bannerModel[]>
    ObterBannerPorId(idAnuncio:number, codigoProvedor: number) : Promise<bannerModel>
    EditarBanner(anuncio:bannerModel) : Promise<bannerModel>
    ExcluiBanner(idAnuncio:string, codigoProvedor:number) : Promise<any>
}