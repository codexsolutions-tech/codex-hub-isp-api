import { inject, injectable } from "tsyringe";
import Provedor from "../../core/domains/Provedor";
import IProvedorRepository from "../../core/interfaces/IProvedorRepository";
import IDBContext from "../interfaces/IDbContext";

@injectable()
export default class ProvedorRepository implements IProvedorRepository{
    
    private _db:IDBContext;

    constructor(@inject("IDBContext") db:IDBContext){
        this._db = db;
    }
    
    async ObterProvedor(codigoProvedor: string): Promise<Provedor> {
      
        const result = await this._db.Execulte<any>("SELECT * FROM provedores WHERE codigo_provedor = $1", [codigoProvedor])
        
        const provedor = result[0];
        return new Provedor(
            provedor.empresa,
            provedor.nome_fantasia,
            provedor.codigo_provedor,
            provedor.status,
            provedor.gerenciador,
            provedor.codigo_api_gerenciador,
            provedor.chave_api_gerenciador,
            provedor.nome_administrador,
            provedor.cpfcnpj
        );
    }

}