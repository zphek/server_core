import { ApiProperty } from "@nestjs/swagger"
import { IsArray, IsBoolean, IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class CreateInvoice {
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    ID: number

    @IsNumber()
    @ApiProperty()
    client_id: number
    
    @IsNotEmpty()
    @IsDate()
    @ApiProperty()
    invoice_date: Date
    
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    total_amount: number
    
    @IsNotEmpty()
    @IsDate()
    @ApiProperty()
    created_at: Date
    
    @IsNotEmpty()
    @IsDate()
    @ApiProperty()
    updated_at: Date
}

class Products{
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    ID: number

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    product_name: string
    
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    quantity: number
    
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    category_name: string
    
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    price: number
    
    @IsNotEmpty()
    @IsBoolean()
    @ApiProperty()
    isVisible: boolean
}

class Services{
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    ID: number

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    service_name: string

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    price: number

    @IsNotEmpty()
    @IsBoolean()
    @ApiProperty()
    isVisible: boolean
}

export class addItems {
    @IsArray()
    @ApiProperty({ type: () => Products }) // Referencia a la clase Products
    products: Products[]
  
    @IsArray()
    @ApiProperty({ type: () => Services }) // Referencia a la clase Services
    services: Services[]
  
    @IsOptional()
    @IsNumber()
    @ApiProperty()
    invoice_id: number

    @IsOptional()
    @IsNumber()
    @ApiProperty()
    client_id: number

    @IsNumber()
    @ApiProperty()
    payment_method: number
  }
  