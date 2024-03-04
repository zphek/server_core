import { Column, Double, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'user_logs'})
export class User_log{

    @PrimaryGeneratedColumn()
    log_id: number

    @Column({ nullable: false })
    user_id: number

    @Column({ nullable: false })
    log_message: string

    @Column({ nullable: false })
    log_timestap: Date

    constructor(log: Partial<User_log>){
        Object.assign(this, log);
    }
}