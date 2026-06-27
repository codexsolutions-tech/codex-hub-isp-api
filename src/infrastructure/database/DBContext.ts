import { Pool, PoolClient } from 'pg'
import IDBContext from "../interfaces/IDbContext";


export default class DBContext implements IDBContext {

    private readonly _pool: Pool; 
    
    constructor(){
        this._pool = new Pool({
            connectionString: process.env.DATABASE_URL
        });
    }

    async Execulte<T>(sql:string, params: any[] = []) : Promise<T[]> {
        try {

            const result = await this._pool.query(sql, params)
            return result.rows as T[];
            
        } catch (error: any) {
            throw new Error(error.message); 
        }
    }
}