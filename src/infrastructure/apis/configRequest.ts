import { emethodHttp } from "../../common/enuns/emethodhttp"
import { queryBody, queryParam } from "./ixcsoft/queryType";

export type configRequest = {
    method: emethodHttp;
    resource:string;
    headers: HeadersInit;
    body?: string |queryBody | queryParam | object | null;
}