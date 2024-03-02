import { Body, Controller, Post } from '@nestjs/common';
import { signIn, signUp } from './dto/auth-dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private service:AuthService) {}

    @Post('/login')
    async logInUser(@Body() response:signIn){
        return await this.service.signIn(response);
    }

    @Post('/register')
    async signUp(@Body() response:signUp){
        return await this.service.signUp(response);
    }
}
