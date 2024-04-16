import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { createProfile, updateProfile } from './dto/profiles-dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { response } from 'express';

@ApiTags("Profiles endpoints:")
@Controller('profiles')
@UseGuards(AuthGuard)
export class ProfilesController {
    constructor(private profilesServices:ProfilesService){}

    @Get("get")
    async getProfiles(){
        return await this.profilesServices.getProfiles();
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
    async updateProfile(@Body() response: updateProfile){
        return await this.profilesServices.updateProfile(response);
    }

    @Delete("delete/:id")
    async deleteProfile(@Param('id') id:number){
        return await this.profilesServices.deleteProfile(id);
    }
}
