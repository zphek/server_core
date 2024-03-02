import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/db/entities/User';
import { createUser } from 'src/users/dto/user-dto';
import { Repository } from 'typeorm';
import { signIn, signUp } from './dto/auth-dto';
import { hash } from "bcrypt";

@Injectable()
export class AuthService {
    constructor(@InjectRepository(User) private UserRepository:Repository<User>) {}

    signIn(response:signIn){
        hash(response.password, 20040915).then(res=>{
            response.password = res;
        })

        console.log(response);
        return this.UserRepository.query(`CALL users_sign_in('${response.username}', '${response.password}');`);
    }

    signUp(response:signUp){
        hash(response.user_password, 20040915).then(res=>{
            response.user_password = res;
        })

        console.log(response);
        return this.UserRepository.query(`CALL users_sign_up('${response.username}', '${response.full_name}', '${response.user_password}', '${response.email}', '${response.phone_number}');`);
    }
}
