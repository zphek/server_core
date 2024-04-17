import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'accounts_receivable' })
export class Account_R{

    @PrimaryGeneratedColumn()
    account_id: number

    @Column({ nullable: false })
    invoice_id: number

    @Column({ nullable: false })
    amount: number

    @Column({ nullable: false })
    due_date: Date

    @Column({ nullable: false })
    status: string

    @Column({ default: new Date() })
    created_at: Date

    @Column({ default: new Date() })
    updated_at: Date

    constructor(account: Partial<Account_R>){
        Object.assign(this, account);
    }
}