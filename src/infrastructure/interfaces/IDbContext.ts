export default interface IDBContext {
    Execulte<T>(sql:string, params: any[]) : Promise<T[]>
}