import { Column, Double, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'quotes'})
export class Quote{

    @PrimaryGeneratedColumn()
    ID: number

    @Column({ nullable: false })
    client_id: number

    @Column({ nullable: false })
    quote_date: Date

    @Column({ nullable: false })
    total_amount: number

    @Column({ nullable: false })
    Status: string

    @Column({ nullable: false })
    isVisible: boolean

    @Column({ default: new Date() })
    createdAt: Date

    @Column({ default: new Date() })
    updatedAt: Date

    constructor(quote: Partial<Quote>){
        Object.assign(this, quote);
    }
}