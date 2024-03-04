import { Body, Controller, Inject, NotFoundException, Post } from '@nestjs/common';
import { signIn, signUp } from './dto/auth-dto';
import { AuthServices } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { JwtService } from '@nestjs/jwt';

@ApiTags("Auth endpoints:")
@Controller('auth')
export class AuthController {
    constructor(
        private readonly service:AuthServices,
        private readonly JwtService: JwtService
    ) {}

    @Post('/login')
    async logInUser(@Body() response: signIn) {
        console.log("buenass");
        const Data = await this.service.signIn(response); // Suponiendo que esto devuelve el JSON del usuario

        // Aquí extraemos el JSON del usuario
        const userData = Data[0][0];

        if(userData.message){
            throw new NotFoundException(userData.message);
        }

        return { accessToken: this.JwtService.sign(userData) };
    }

    @Post('/register')
    async signUp(@Body() response:signUp){
        return await this.service.signUp(response);
    }
}
