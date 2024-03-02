import { Injectable } from "@nestjs/common";
import { hash } from "bcrypt";

@Injectable()
export class crypt{
    async encrypt(password:string){
        return await hash(password, 20040915);
    }
}