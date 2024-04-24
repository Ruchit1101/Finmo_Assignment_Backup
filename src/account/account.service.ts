import { Injectable } from "@nestjs/common";
import { Account } from "./account.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";


@Injectable()
export class AccountService{
       constructor
      ( @InjectRepository(Account) 
       private accountRepository: Repository<Account>,) {}
       topUpAccount(currency: string, amount: number): string{
              return `Succefully topped up ${amount} ${currency}`;
       }
//   API 4
     async getAccountBalance(
              userId:string,
       ): Promise<{[currency: string]: number}>{
              const account = await this.accountRepository.findOne({
                   where: {userId},
                   relations:['balances'],
              });

              if(!account)
              {
                 console.error(`No registered user found...`);     
              }
              // BALANCE FOR ACCOUNT....
             const bal= {};
             account.balances.forEach((balance)=>{
              bal[balance.currency] = balance.amount
             });

             return bal;
       }
}