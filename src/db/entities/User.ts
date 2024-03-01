import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'users'})
export class User{

    @PrimaryGeneratedColumn()
    ID: number

    @Column({ unique: true, nullable: false })
    username: string

    @Column({ nullable: false })
    full_name: string

    @Column({ nullable: false })
    user_password: string

    @Column({ nullable: false })
    email: string  

    @Column({ nullable: false })
    phone_number: string

    @Column({ nullable: false })
    profile_type: number

    @Column()
    createdAt: Date

    @Column()
    updatedAt: Date

    constructor(user: Partial<User>){
        Object.assign(this, user);
    }
}