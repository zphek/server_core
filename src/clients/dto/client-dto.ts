import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class createClient{
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    client_fullname: string

    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    email: string

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    phone_number: string
}

export class updateClient{
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    client_fullname: string

    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    email: string

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    phone_number: string
}