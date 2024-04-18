import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Balance } from "./balance.entity";

@Entity()
export class Record{
       @PrimaryGeneratedColumn()
       id: number;

       @Column()
       userId: string;
       
       @Column()
       name: string;
       
       @Column()
       govtDocumnet: string;

       @OneToMany(()=>Balance, balance=>balance.record)
       balances: Balance[];

}