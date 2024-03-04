import { ApiProperty, } from "@nestjs/swagger"

export class createUser{
    @ApiProperty({
        type: String,
        description: "Nombre de usuario único",
        example: "john_doe"
    })
    username: string

    
    full_name: string
    user_password: string
    email: string
    phone_number: string
    profile_type: number
}