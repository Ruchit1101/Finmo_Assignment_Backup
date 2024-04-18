import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Record } from "./record.entity";

@Injectable()
export class RecordService{
       constructor(
              @InjectRepository(Record)
              private recordRepository:
              Repository<Record>,
       ) {}
       topUpRecord(currency: string, amount: number): string{
              return `Operation Succefull ${amount} ${currency}`;
       }
       async getRecordSheet(
              userId: string,
       ): Promise<{
              [currency: string]:number
       }>{
          const record = await this.recordRepository.findOne({
              where: {userId},
              relations: ['balances'],
          });

          if(!record){
              console.error(`User not found!`);   
          }
          const balances = {};
          record.balances.forEach((amt)=>{
              balances[amt.currency]=amt.amount;
          });
          return balances;
       }
}