import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { signIn, signUp } from 'src/auth/dto/auth-dto';
import { User } from 'src/db/entities/User';
import { Repository } from 'typeorm';
import * as bcrypt from "bcrypt";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) 
        private UserRepository: Repository<User>
    ){}

    async signIn(response:signIn): Promise<any> {
        response.password = await bcrypt.hash(response.password, 20040915);

        console.log(response);
        return await this.UserRepository.query(`CALL users_sign_in('${response.username}', '${response.password}');`);
    }

    async signUp(response:signUp): Promise<any> {
        response.user_password = await bcrypt.hash(response.user_password, 20040915);

        console.log(response);
        return await this.UserRepository.query(`CALL users_sign_up('${response.username}', '${response.full_name}', '${response.user_password}', '${response.email}', '${response.phone_number}');`);
    }

    async getAllUsers(): Promise<any>{
        return await this.UserRepository.find();
    }

    async getUserById(ID: number){
        return await this.UserRepository.findOne({
            where:{
                ID
            }
        });
    }

    updateUser(){
        
    }
}
