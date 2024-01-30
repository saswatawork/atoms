
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({
        length: 100,
        default: ''
    })
    name!: string

    @Column({
        length: 15,
        unique: true
    })
    phone!: string

    @Column({
        length: 150,
        unique: true
    })
    email!: string

    @Column({
        length: 20,
    })
    password!: string
}
