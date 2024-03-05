import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";

@Entity({ name: "products_category" })
export class Product_C{
    @PrimaryGeneratedColumn()
    ID: number

    @Column({ nullable: false, unique: true })
    category_name: string
}