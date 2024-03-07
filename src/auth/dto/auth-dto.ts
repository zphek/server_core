export class signUp{
    username: string
    full_name: string
    user_password: string
    email: string
    phone_number: string
    profile_type: number
}

export class signIn{
    username: string
    password: string
}

export class User{
    ID: number
    username: string
    full_name: string
    email: string
    phone_number: string
    profile_type: number
}

export class payload{
    user: User
    privileges: []
}