import { Inject, Injectable } from "@nestjs/common";
import { UsersService } from "src/users/users.service";
import { signIn, signUp } from "./dto/auth-dto";

@Injectable()
export class AuthServices{
    constructor(
        @Inject(UsersService)
        private readonly AuthService:AuthServices
    ){}

    async signIn(response:signIn){
        return await this.AuthService.signIn(response)
    }

    async signUp(response:signUp){
        return await this.AuthService.signUp(response);
    }
}