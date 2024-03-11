export class CreateInvoice {
    ID: number
    client_id: number
    invoice_date: Date
    total_amount: number
    created_at: Date
    updated_at: Date
}

class Products{
    ID: number
    product_name: string
    quantity: number
    category_name: string
    price: number
    isVisible: boolean
}

class Services{
    ID: number
    service_name: string
    price: number
    isVisible: boolean
}

export class addItems{
    products: Products[]
    services: Services[]
    invoice_id: number
}