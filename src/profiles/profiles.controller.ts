import { Body, Controller, Get, Post, Put, UseGuards } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { createProfile } from './dto/profiles-dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@ApiTags("Profiles endpoints:")
@Controller('profiles')
@UseGuards(AuthGuard)
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
