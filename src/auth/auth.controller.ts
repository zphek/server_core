import { Body, Controller, InternalServerErrorException, NotFoundException, Post, Req, UseGuards } from '@nestjs/common';
import { signIn, signUp } from './dto/auth-dto';
import { AuthServices } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from './guards/auth.guard';

@ApiTags("Auth endpoints:")
@Controller('auth')
export class AuthController {
    constructor(
        private readonly service:AuthServices,
        private readonly JwtService: JwtService
    ) {}

    @Post('login')
    async logInUser(@Body() response: signIn) {
        if(response.password.trim() === "" || response.username.trim() === ""){
            throw new InternalServerErrorException("Falta el campo username o password.");
        }

        const Data = await this.service.signIn(response);

        if(Data.message){
            throw new NotFoundException(Data.message);
        }

        console.log(Data)

        return { accessToken: this.JwtService.sign(Data) };
    }

    @Post('register')
    async signUp(@Body() response:signUp){
        return await this.service.signUp(response);
    }

    @Post('close')
    @UseGuards(AuthGuard)
    async closeSession(@Req() request:Request){
        request['user'] = null;
        return {
            error: false,
            mssge: "Close session sucessfully!"
        }
    }
}
