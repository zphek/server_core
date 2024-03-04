import { Column, Double, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'accounts_receivable' })
export class Account_R{

    @PrimaryGeneratedColumn()
    account_id: number

    @Column({ nullable: false })
    invoice_id: number

    @Column({ nullable: false })
    amount: Double

    @Column({ nullable: false })
    due_date: Date

    @Column({ nullable: false })
    status: string

    @Column({ default: new Date() })
    createdAt: Date

    @Column({ default: new Date() })
    updatedAt: Date

    constructor(account: Partial<Account_R>){
        Object.assign(this, account);
    }
}