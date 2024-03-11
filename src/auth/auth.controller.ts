import { Body, Controller, InternalServerErrorException, NotFoundException, Post, Req, UseGuards, UseInterceptors } from '@nestjs/common';
import { signIn, signUp } from './dto/auth-dto';
import { AuthServices } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from './guards/auth.guard';
import { Request } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { GetTokenGuard } from './guards/getToken.guard';

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

        if(!Data){
            throw new NotFoundException("Incorrect username or password.");
        }

        console.dir(Data)

        return { accessToken: this.JwtService.sign(Data) };
    }

    @Post('register')
    @UseGuards(GetTokenGuard)
    @UseInterceptors(FileInterceptor('file'))
    async signUp(@Body() response:signUp, @Req() request:Request){
        const data = request['user'];
        console.log(data)
        
        return await this.service.signUp(response, data);
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
