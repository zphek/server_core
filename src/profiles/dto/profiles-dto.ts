import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class createProfile{
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    profile_role: string

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    role_description: string
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