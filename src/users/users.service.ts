import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { signIn, signUp } from 'src/auth/dto/auth-dto';
import { User } from 'src/db/entities/User';
import { Repository } from 'typeorm';
// import * as bcrypt from "bcrypt";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) 
        private UserRepository: Repository<User>
    ){}

    signIn(response:signIn){
        // bcrypt.hash(response.password, 20040915).then(res=>{
        //     response.password = res;
        // })

        console.log(response);
        return this.UserRepository.query(`CALL users_sign_in('${response.username}', '${response.password}');`);
    }

    signUp(response:signUp){
        // bcrypt.hash(response.user_password, 20040915).then(res=>{
        //     response.user_password = res;
        // })

        console.log(response);
        return this.UserRepository.query(`CALL users_sign_up('${response.username}', '${response.full_name}', '${response.user_password}', '${response.email}', '${response.phone_number}');`);
    }

    async getAllUsers(){
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
