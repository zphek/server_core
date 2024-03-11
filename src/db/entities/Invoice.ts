import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'invoices'})
export class Invoice{

    @PrimaryGeneratedColumn()
    ID: number

    @Column()
    client_id: number

    @Column()
    invoice_date: Date

    @Column()
    total_amount: number

    @Column()
    created_at: Date

    @Column()
    updated_at: Date
}