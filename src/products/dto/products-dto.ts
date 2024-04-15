import { ApiProperty } from "@nestjs/swagger"
import { File } from "buffer"
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class createProduct{
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    product_name: string
    
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    stock: string
    
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    category_id: string

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    price: string

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    isVisible: string

    @ApiProperty()
    file: any

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    url_image: string
}

export class UpdateProduct{
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
    stock: number

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    category_id: number
    
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    price: number

    @IsNotEmpty()
    @IsBoolean()
    @ApiProperty()
    isVisible: boolean
}
