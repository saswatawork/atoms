import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProductCategory } from ".";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id!: number

    @Column("text")
    title!: string

    @Column("text")
    description!: string

    @ManyToOne(() => ProductCategory)
    @JoinColumn()
    category!: Number
}