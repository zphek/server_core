
export class RegisterDto{
    username: string
    full_name: string
    user_password: string
    email: string
    phone_number: string
    profile_type: number
}

export class LoginDto{
    username: string
    password: string
}