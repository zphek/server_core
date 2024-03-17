import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
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
    async getProfileById(@Param('id') id:number){
        return await this.profilesServices.getProfileById(id);
    }
    
    @Post("create")
    async createProfile(@Body() response:createProfile){
        return await this.profilesServices.createProfile(response);
    }

    @Put("update")
    updateProfile(){

    }
}
