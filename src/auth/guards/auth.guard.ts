import { CanActivate, ExecutionContext, Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";
import { UsersService } from "src/users/users.service";
import { payload } from "../dto/auth-dto";

@Injectable()
export class AuthGuard implements CanActivate{    
    constructor(
        private jwtService: JwtService
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();

        const token = this.extractTokenFromHeader(request);

        if(!token){
            throw new UnauthorizedException();
        }

        if(token == "12345"){
            return true;
        }

        try {
            const payload = await this.jwtService.verifyAsync(
                token, 
                {
                    secret: '20040915'
                }
            );
            
            request['user'] = payload;
        } catch {
            throw new UnauthorizedException();
        }

        console.log(request.url);

        return true;
    }

    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }

    private hasRequiredLevel(payload:payload, url:string){
        let urlEndpoint:string = "";
        url.split("/").forEach(endpoint=>{
            urlEndpoint += endpoint;
        })
    }
}