import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProfilesService } from './profiles.service';

interface createResponse{
    username: string,
    password: string
}

interface updateResponse{

}

@Controller('profiles')
export class ProfilesController {
    constructor(private profilesServices:ProfilesService){}

    @Post()
    createProfile(@Body() response: createResponse){
        
    }

    @Post()
    updateProfile(){

    }

    @Get()
    getProfiles(){

    }

    @Get(':id')
    getProfileById(){

    }
}
