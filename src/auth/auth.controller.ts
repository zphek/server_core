import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    @Post('/user')
    logInUser(){

    }

    @Post('/profile')
    logInProfile(){
        
    }
}
