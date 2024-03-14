import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class signUp{
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    username: string

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    full_name: string

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    user_password: string
    
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    email: string

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    phone_number: string
    
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    profile_type: number
}

export class signIn{
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    username: string

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    password: string
}

export class User{
    ID: number
    username: string
    full_name: string
    email: string
    phone_number: string
    profile_type: number
    client_id: number
}

export class payload{
    user: User
    privileges: string[]
}