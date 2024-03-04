import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "products_category" })
export class Product_C{
    @PrimaryGeneratedColumn()
    ID: number

    @Column({ nullable: false, unique: true })
    category_name: string
}