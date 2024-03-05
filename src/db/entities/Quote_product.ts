import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "quotes_products" })
export class Quote_products{
    @PrimaryGeneratedColumn()
    ID: number

    @Column()
    id_product: number

    @Column()
    quantity: number

    @Column()
    id_quote: number
}