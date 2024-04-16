import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from 'src/db/entities/Profile';
import { Repository } from 'typeorm';
import { createProfile, updateProfile } from './dto/profiles-dto';

@Injectable()
export class ProfilesService {
    constructor(
        @InjectRepository(Profile)
        private readonly ProfileRepository:Repository<Profile>
    ){}
    
    async createProfile(response:createProfile){
        return await this.ProfileRepository.save(response);
    }

    async updateProfile(response:updateProfile){
        return await this.ProfileRepository.update(response.ID, {
            profile_role: response.profile_role,
            role_description: response.role_description
        })
    }

    async deleteProfile(ID:number){
        const profile = await this.ProfileRepository.findOne({ where: { ID } });

        if(!profile){
            throw new HttpException(`The profile ID proporcionated doesn't exist.`, 500);
        }

        return await this.ProfileRepository.delete(profile);
    }

    async getProfiles(){
        return await this.ProfileRepository.find();
    }

    async getProfileById(ID:number){
        return await this.ProfileRepository.findOne({
            where: {
                ID
            }
        });
    }
}
