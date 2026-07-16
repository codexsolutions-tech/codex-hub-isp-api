import jwt from "jsonwebtoken";
import "dotenv/config";
import { payloadToken } from "../Dtos/payloadToken";

export default class JwtService {
    
    private accessSecret;
    private refreshSecret;
    
    constructor(){
        const access = process.env.ACCESS_SECRET;
        const refresh = process.env.REFRESH_SECRET;

        if (!access || !refresh) {
        throw new Error("JWT secrets não configuradas no .env");
        }

        this.accessSecret = access;
        this.refreshSecret = refresh;
    }
    
    GerarToken(data:payloadToken): string {
        return jwt.sign(
            data, 
            this.accessSecret, {
            expiresIn: "12h",
        });
    }

    GerarRefreshToken(data:string): string {
        return jwt.sign(
            { userId: data }, 
            this.refreshSecret, 
            {
                expiresIn: "7d",
            });
    }
    
    VerificarRefreshToken(token: string): string | null {
        try {
            const payload = jwt.verify(token, this.refreshSecret) as any;
            return payload;
        } catch {
            return null;
        }
    }
}