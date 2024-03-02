import { Body, Controller, Inject, Post } from '@nestjs/common';
import { signIn, signUp } from './dto/auth-dto';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
    constructor(
        @Inject(UsersService)
        private service:UsersService
    ) {}

    @Post('/login')
    async logInUser(@Body() response:signIn){
        return await this.service.signIn(response);
    }

    @Post('/register')
    async signUp(@Body() response:signUp){
        return await this.service.signUp(response);
    }
}
