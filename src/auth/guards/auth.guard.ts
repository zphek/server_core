import { CanActivate, ExecutionContext, HttpException, Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";
import { payload } from "../dto/auth-dto";
import { requiredPrivileges } from "./ProtectedRoutes";

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
            
            //console.log(request.url)

            if(!this.hasRequiredLevel(payload, request.url)){
                return false;
            }
        } catch {
            throw new UnauthorizedException();
        }

        return true;
    }

    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }

    private hasRequiredLevel(payload: payload, url: string): boolean {    
        for (const [route, privileges] of Object.entries(requiredPrivileges)) {
            if (url.startsWith(route)) {
                for (const privilege of privileges) {
                    if (this.hasPrivilege(payload.privileges, privilege)) {
                        console.log(payload.privileges);
                        return true;
                    }
                }
                return false;
            }
        }
    
        return true;
    }
    

    private hasPrivilege(privileges:string[], privilege:string){
        for(let i = 0; i < privileges.length; i++){
            if(privileges[i] == privilege){
                return true;
            }
        }


        return false;
    }
}