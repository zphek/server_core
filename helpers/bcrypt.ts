import { hash } from "bcrypt";

export async function encrypt(password:string){
    return await hash(password, 20040915);
}