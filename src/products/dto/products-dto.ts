import { Product } from "src/db/entities/Product"

export class createProduct{
    product_name: string
    stock: number
    category_id: number
    price: number
    isVisible: boolean
    url_image: string
}

export class Products{
    product_name: string
    stock: number
    category_name: string
    price: number
    isVisible: boolean
}

export class addProduct{
    products: Products[]
}