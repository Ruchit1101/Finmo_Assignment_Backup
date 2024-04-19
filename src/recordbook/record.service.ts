import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Record, RecordSchema } from "./record.schema";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class RecordService{
       constructor(
              @InjectModel('Record')
              private recordModel:
              Model<Record>,
       ) {}
       topUpRecord(currency: string, amount: number): string{
              return `Operation Succefull ${amount} ${currency}`;
       }
       async getRecordSheet(
              userId: string,
       ): Promise<{
              [currency: string]:number
       }>{
          const record = await this.recordModel.findOne({userId
          }).exec();

          if(!record){
              console.error(`User not found!`); 
              return null;  
          }
          const balances = {};
          record.balances.forEach((amt)=>{
              balances[amt.currency]=amt.amount;
          });
          return balances;
       }
}