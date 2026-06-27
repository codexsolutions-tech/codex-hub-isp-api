import { emethodHttp } from "../../common/enuns/emethodhttp"

export type configRequest = {
    method: emethodHttp;
    resource:string;
    body: object | null;
    typeToken?: string;
    token?: string | null;
}