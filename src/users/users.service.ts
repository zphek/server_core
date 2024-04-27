import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { payload, signIn, signUp } from '../auth/dto/auth-dto';
import { User } from '../db/entities/User';
import { Repository } from 'typeorm';

import * as bcrypt from "bcrypt";
import { updateUser } from './dto/user-dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) 
        private UserRepository: Repository<User>
    ){}

    async signIn(response:signIn) {
        bcrypt.hash(response.password, SECRET).then(resp=>{
            response.password = resp;
        })

        console.log(response);

        const user = await this.UserRepository.findOne({
            where: {
                username: response.username,
                user_password: response.password
            }
        });

        if(!user){
            return false;
        }

        const ID = user.ID;
        const permissions = await this.UserRepository.query(`SELECT getPermissions(${ID});`);

        return {
            user,
            privileges: permissions[0][`getPermissions(${ID})`] != null ? permissions[0][`getPermissions(${ID})`].split(', ') : [null]
        }
    }

    async signUp(response:signUp, data:payload) {
        console.log(response);

        if (response.user_password.length < 10) {
            throw new HttpException('La contraseña debe tener al menos 10 caracteres, una letra mayúscula y un número.', 500);
        }

        const containsUpperCase = /[A-Z]/.test(response.user_password);
        const containsNumber = /[0-9]/.test(response.user_password);
        if (!containsUpperCase || !containsNumber) {
            throw new HttpException('La contraseña debe tener al menos 10 caracteres, una letra mayúscula y un número.', 500);
        }

        if(await this.UserRepository.findOne({ where:{ username: response.username}})){
            throw new HttpException('This user exist, choose another username.', 500);   
        }
    
        bcrypt.hash(response.user_password, SECRET).then(resp=>{
            response.user_password = resp;
        })

        try {
            console.log(data)
            if(data && data.privileges){
                if(Array.isArray(data.privileges) && (data.privileges.includes('ALL') || data.privileges.includes('Users'))) {
                    return await this.UserRepository.save({
                        username:  response.username,
                        full_name: response.full_name,
                        profile_type: response.profile_type,
                        phone_number: response.phone_number,
                        email:  response.email,
                        user_password: response.user_password
                    })
                }            
            }

            return await this.UserRepository.query(`CALL users_sign_up('${response.username}', '${response.full_name}', '${response.user_password}', '${response.email}', '${response.phone_number}');`);
        } catch (error) {
            throw new HttpException(error.sqlMessage, 500);
        }
    }

    async getAllUsers(): Promise<User[]>{
        return await this.UserRepository.find();
    }

    async getUserById(ID: number){
        return await this.UserRepository.findOne({
            where:{
                ID
            }
        });
    }

    async getPermissions(ID:number){
        return await this.UserRepository.query("");
    }

    updateUser(user: updateUser){
        
    }

    async deleteUser(ID:number){
        const user = await this.UserRepository.findOne({ where: { ID } });

        if(!user){
            throw new HttpException(`The given user doesn't exist.`, 500);
        }

        try {
            const response = await this.UserRepository.delete(user);
            
            return {
                message: "User has been successfully deleted!",
                error: false
            }
        } catch (error) {
            return error
        }
    }
}
