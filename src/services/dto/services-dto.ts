import { ApiProperty } from "@nestjs/swagger"

export class createService{
    @ApiProperty()
    service_name: string
    
    @ApiProperty()
    services_description: string
    
    @ApiProperty()
    price: number
}

export class updateService{
    @ApiProperty()
    service_name: string
    
    @ApiProperty()
    services_description: string
    
    @ApiProperty()
    price: number
    
    @ApiProperty()
    isVisible: boolean
}