import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name:"profiles" })
export class Profile{
    @PrimaryGeneratedColumn()
    ID: number

    @Column()
    profile_role: string

    @Column({ default: new Date() })
    createdAt: Date

    @Column({ default: new Date() })
    updatedAt: Date
}