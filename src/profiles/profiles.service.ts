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
        try {
            if(response.roles.length == 0 || response.roles[0] == null){
                throw new Error("There's no any permissions to add to the role.");
            }

            if(response.roles.length > 1 && response.roles.indexOf(1) != -1){
                throw new Error("If you have the 'ALL' permission, you can't have more permissions.");
            }

            const profile = await this.ProfileRepository.save({
                profile_role: response.profile_role,
                role_description: response.role_description,
            });

            response.roles.map(role=>{
                this.ProfileRepository.query(`INSERT INTO profiles_permissions VALUES(null, ${profile.ID}, ${role})`);
            })

            return {
                message: "Profile was successfully created!",
                error: false,
                code: 200
            }
        } catch (error) {
            throw new HttpException(error.message, 500);
        }
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
