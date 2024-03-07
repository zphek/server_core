import { Product } from "src/db/entities/Product"

export class createProduct{
    product_name: string
    stock: number
    category_id: number
    price: number
    isVisible: boolean
    url_image: string
}

export class UpdateProduct{
    ID: number
    product_name: string
    stock: number
    category_id: number
    price: number
    isVisible: boolean
}
