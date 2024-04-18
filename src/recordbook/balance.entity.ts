import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

import { Record } from "./record.entity";


@Entity()
export class Balance{
       @PrimaryGeneratedColumn()
       id: number;
       @Column()
       currency: string;
       @Column('decimal',{precision:10, scale: 2})
       amount: number;

       @ManyToOne(()=>Record, record=>record.balances)
       record: Record;
}