import { Controller, Body, Post } from "@nestjs/common";
import { AccountService } from "./account.service";

@Controller('accounts')
export class AccountController{
      constructor(private accountService: AccountService) {}
       @Post('topup')
       topUpAccount(
              @Body('currency')
              currency: string,
              @Body('amount')
              amount: number,
       ): string{
              return this.accountService.topUpAccount(currency, amount);
       }
}