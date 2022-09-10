import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    public readonly id: number;

    @Column()
    public name: string;

    @Column({ type: "varchar" })
    public age: string;

    @Column({ type: "varchar" })
    public phone: string;

    @Column({ type: "varchar" })
    public address: string;


}