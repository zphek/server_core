import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto, RegisterDto } from './dto/auth-dto';

@Controller('auth')
export class AuthController {
    @Post('/login')
    logInUser(@Body() response:RegisterDto){

    }

    @Post('/register')
    logInProfile(@Body() response:LoginDto){
        
    }
}
