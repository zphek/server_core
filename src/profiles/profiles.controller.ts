import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {
    constructor(private profilesServices:ProfilesService){}

    @Get()
    getProfiles(){
        
    }

    @Post()
    createProfile(@Body() response){
        
    }

    @Post()
    updateProfile(){

    }

    @Get(':id')
    getProfileById(){

    }
}
