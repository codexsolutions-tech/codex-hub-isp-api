import { emethodHttp } from "../../common/enuns/emethodhttp"

export type configRequest = {
    method: emethodHttp;
    resource:string;
    headers: HeadersInit;
    body?: object | null;
}