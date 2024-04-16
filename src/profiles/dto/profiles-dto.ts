import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsString } from "class-validator";

export class createProfile{
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    profile_role: string

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    role_description: string

    @IsNotEmpty()
    @IsArray()
    @ApiProperty()
    roles: number[]
}

export class updateProfile{
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    ID: number

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    profile_role: string

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    role_description: string
}