import { Body, Controller, Inject, Post } from '@nestjs/common';
import { signIn, signUp } from './dto/auth-dto';
import { AuthServices } from './auth.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Auth endpoints:")
@Controller('auth')
export class AuthController {
    constructor(
        private readonly service:AuthServices
    ) {}

    @Post('/login')
    async logInUser(@Body() response:signIn){
        console.log("buenass");
        return await this.service.signIn(response);

        return {message: "recibido"}
    }

    @Post('/register')
    async signUp(@Body() response:signUp){
        return await this.service.signUp(response);

        return {message: "sdjasl"}
    }
}
