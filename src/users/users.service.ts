import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { signIn, signUp } from '../auth/dto/auth-dto';
import { User } from '../db/entities/User';
import { Repository } from 'typeorm';
import * as bcrypt from "bcrypt";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) 
        private UserRepository: Repository<User>
    ){}

    async signIn(response:signIn) {
        bcrypt.hash(response.password, 20040915).then(resp=>{
            response.password = resp;
        })

        // console.log(response);

        const userData = await this.UserRepository.query(`CALL users_sign_in('${response.username}', '${response.password}');`);

        if(userData.message){
            return userData[0][0];
        }

        const ID = userData[0][0].ID;
        const permissions = await this.UserRepository.query(`SELECT getPermissions(${ID});`);

        // console.log({
        //     user: userData[0][0],
        //     privileges: permissions[0][`getPermissions(${ID})`]
        // })

        console.log(permissions)

        return {
            user: userData[0][0],
            privileges: permissions[0][`getPermissions(${ID})`] != null ? permissions[0][`getPermissions(${ID})`].split(', ') : [null]
        }
    }

    async signUp(response:signUp) {
        // Verificar la longitud de la contraseña

        console.log(response.user_password);

        if (response.user_password.length < 10) {
            throw new HttpException('La contraseña debe tener al menos 10 caracteres, una letra mayúscula y un número.', 500);
        }

        // Verificar si la contraseña contiene al menos una letra mayúscula y un número
        const containsUpperCase = /[A-Z]/.test(response.user_password);
        const containsNumber = /[0-9]/.test(response.user_password);
        if (!containsUpperCase || !containsNumber) {
            throw new HttpException('La contraseña debe tener al menos 10 caracteres, una letra mayúscula y un número.', 500);
        }
    
        bcrypt.hash(response.user_password, 20040915).then(resp=>{
            response.user_password = resp;
        })  

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

    async getPermissions(ID:number){
        return await this.UserRepository.query("");
    }

    updateUser(){
        
    }
}
