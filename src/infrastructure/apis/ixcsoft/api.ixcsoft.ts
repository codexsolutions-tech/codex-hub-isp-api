import { configRequest } from "../configRequest";

export default class apiIxcSoft {

    private URLBase:string = "https://comnecttelecom.com.br/webservice/v1";

    constructor(){

    }

    public async Requst<T>(configRequest:configRequest) : Promise<T> {
        
        const body = configRequest.body === null ? "" :  JSON.stringify(configRequest.body);
        
        const response = await fetch(`${this.URLBase}/${configRequest.resource}`, {
            method: configRequest.method,
            headers: {
                 "Content-Type": "application/json",
                 "Authorization": `${configRequest.typeToken} ${configRequest.token}` 
            },
            body : body
        });

        const retorno = JSON.parse(await response.json()) as T;

        return retorno;

    }
}