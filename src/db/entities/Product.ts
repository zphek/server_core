import { Column, Double, Entity, JoinColumn, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product_C } from "./Product_C";

@Entity({name: 'products'})
export class Product{

    @PrimaryGeneratedColumn()
    ID: number

    @Column({ nullable: false })
    product_name: string

    @Column({ nullable: false })
    stock: number

    @Column()
    category_id: number

    @Column({ nullable: false })
    price: number

    @Column({ nullable: false })
    isVisible: boolean

    @Column({ default: new Date() })
    createdAt: Date

    @Column({ default: new Date() })
    updatedAt: Date

    @Column({ nullable: false })
    url_image: string
}