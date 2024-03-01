import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'invoices'})
export class Invoice{

    @PrimaryGeneratedColumn()
    ID: number

    @Column()
    client_id: number

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

    @Column({ default: new Date() })
    createdAt: Date

    @Column({ default: new Date() })
    updatedAt: Date

    constructor(invoice: Partial<Invoice>){
        Object.assign(this, invoice);
    }
}