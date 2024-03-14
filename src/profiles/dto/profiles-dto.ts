import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class createProfile{
    @IsString()
    @ApiProperty()
    profile_role: string
}