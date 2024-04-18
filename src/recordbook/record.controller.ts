import { Body, Controller, Post } from "@nestjs/common";
import { RecordService } from "./record.service";



@Controller('record')
export class RecordController{
       constructor(private readonly recordLog: RecordService) {}

       @Post('topup')
       topUpRecord(
              @Body('currency')
              currency: string,
              @Body('amount')
              amount: number,
       ): string{
              return this.recordLog.topUpRecord(currency, amount);
       }
}