import { CanActivate, ExecutionContext, HttpException, Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";

@Injectable()
export class GetTokenGuard implements CanActivate{    
    constructor(
        private jwtService: JwtService
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();

        const token = this.extractTokenFromHeader(request);

        if(token){
            const payload = await this.jwtService.verifyAsync(
                token, 
                {
                    secret: '20040915'
                }
            );
            
            request['user'] = payload;
    
            return true;
        }

        return true;
    }

    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}