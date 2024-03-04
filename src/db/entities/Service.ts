import { Column, Double, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'services'})
export class Service{

    @PrimaryGeneratedColumn()
    ID: number

    @Column({ nullable: false })
    service_name: string

    @Column({ nullable: false })
    service_description: string

    @Column({ nullable: false })
    price: number

    @Column({ nullable: false })
    isVisible: boolean

    @Column({ default: new Date() })
    createdAt: Date

    @Column({ default: new Date() })
    updatedAt: Date

    constructor(service: Partial<Service>){
        Object.assign(this, service);
    }
}