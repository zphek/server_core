import { Inject, Injectable } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { signIn, signUp } from "./dto/auth-dto";

@Injectable()
export class AuthServices{
    @Inject(UsersService)
    private readonly service:UsersService

    signIn(response:signIn){
        return this.service.signIn(response)
    }

    async signUp(response:signUp){
        try {
            const res = await this.service.signUp(response);
        } catch (error) {
            return await error;
        }
    }
}