import { Inject, Injectable } from "@nestjs/common";
import { UsersService } from "src/users/users.service";
import { signIn, signUp } from "./dto/auth-dto";

@Injectable()
export class AuthServices{
    constructor(
        @Inject(UsersService)
        private readonly AuthService:AuthServices
    ){}

    signIn(response:signIn){
        this.AuthService.signIn(response)
    }

    signUp(response:signUp){
        this.AuthService.signUp(response);
    }
}