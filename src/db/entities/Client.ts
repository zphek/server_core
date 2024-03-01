import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'clients' })
export class Client{

    @PrimaryGeneratedColumn()
    ID: number

    @Column({ nullable: false })
    client_fullname: string

    @Column({ nullable: false })
    email: string

    @Column({ nullable: false })
    phone_number: string

    @Column()
    createdAt: Date

    @Column()
    updatedAt: Date

    constructor(client: Partial<Client>){
        Object.assign(this, client);
    }
}