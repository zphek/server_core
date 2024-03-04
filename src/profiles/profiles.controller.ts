import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { createProfile } from './dto/profiles-dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Profiles endpoints:")
@Controller('profiles')
export class ProfilesController {
    constructor(private profilesServices:ProfilesService){}

    @Get("get")
    getProfiles(){
        
    }

    @Get('get/:id')
    getProfileById(){

    }
    
    @Post("create")
    createProfile(@Body() response:createProfile){
        
    }

    @Put("update")
    updateProfile(){

    }
}
