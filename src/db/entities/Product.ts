import { Column, Double, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'products'})
export class Product{

    @PrimaryGeneratedColumn()
    ID: number

    @Column({ nullable: false })
    product_name: string

    @Column({ nullable: false })
    stock: number

    @Column({ nullable: false })
    category_id: number

    @Column({ nullable: false })
    price: Double

    @Column({ nullable: false })
    isVisible: boolean

    @Column({ default: new Date() })
    createdAt: Date

    @Column({ default: new Date() })
    updatedAt: Date

    @Column({ nullable: false })
    url_image: string

    constructor(product: Partial<Product>){
        Object.assign(this, product);
    }
}