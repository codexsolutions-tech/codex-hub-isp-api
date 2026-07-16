import { configRequest } from "./configRequest";

export default class RequestService {

    private URLBase:string;

    constructor(urlBase:string){
        this.URLBase = urlBase;
    }

    public async Requst(configRequest:configRequest) : Promise<Response> {
        
        const body = configRequest.body === null ? "" :  JSON.stringify(configRequest.body);            
        
        const response = await fetch(`${this.URLBase}${configRequest.resource}`, {
            method: configRequest.method,
            headers: configRequest.headers,
            body: body
        });

        if (!response.ok) {
            throw new Error(
                `Erro ${response.status}: ${response.statusText}`
            );
        }

        return response;
    }
}