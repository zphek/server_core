import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/db/entities/User';
import { createUser } from 'src/users/dto/user-dto';
import { Repository } from 'typeorm';
import { signIn, signUp } from './dto/auth-dto';
import { crypt } from 'src/helpers/bcrypt';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(User) private UserRepository:Repository<User>,
    private helper:crypt) {}

    signIn(response:signIn){
        this.helper.encrypt(response.password).then(res=>{
            response.password = res;
        })

        console.log(response);
        return this.UserRepository.query(`CALL users_sign_in('${response.username}', '${response.password}');`);
    }

    signUp(response:signUp){
        this.helper.encrypt(response.user_password).then(res=>{
            response.user_password = res;
        })

        console.log(response);
        return this.UserRepository.query(`CALL users_sign_up('${response.username}', '${response.full_name}', '${response.user_password}', '${response.email}', '${response.phone_number}');`);
    }
}
