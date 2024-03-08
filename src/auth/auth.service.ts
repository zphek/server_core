import { Inject, Injectable } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { payload, signIn, signUp } from "./dto/auth-dto";

@Injectable()
export class AuthServices{
    @Inject(UsersService)
    private readonly service:UsersService

    async signIn(response:signIn){
        return await this.service.signIn(response)
    }

    async signUp(response:signUp, data:payload){
        return await this.service.signUp(response, data);
    }
}