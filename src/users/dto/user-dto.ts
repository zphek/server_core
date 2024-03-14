import { ApiProperty, } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class updateUser{
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