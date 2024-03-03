import { Inject, Injectable } from "@nestjs/common";
import { UsersService } from "src/users/users.service";
import { signIn, signUp } from "./dto/auth-dto";

@Injectable()
export class AuthServices{
    @Inject(UsersService)
    private readonly service:UsersService

    signIn(response:signIn){
        return this.service.signIn(response)
    }

    signUp(response:signUp){
        return this.service.signUp(response);
    }
}