import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProductCategory {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({
        length: 100
    })
    name!: string

    @Column('text')
    description!: string
}