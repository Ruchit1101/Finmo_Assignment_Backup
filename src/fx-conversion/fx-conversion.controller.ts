import { Body, Controller, Post } from "@nestjs/common";
import { FXconversionService } from "./fx-conversion.service";
@Controller('fx-conversion')
export class FXConversionController{
       constructor(private fxconversionService: FXconversionService) {}
       @Post()
       // FX CONVERSION API...
       async FXconversion(@Body() resBody: any): Promise<{
              convertedAmount: number,
              currency: string
       }>{
              try{
                     const {uniqueId, fromCurrency, toCurrency, amount} = resBody;
                     const convertedAmount = await this.fxconversionService.convertFX(fromCurrency, toCurrency, amount, uniqueId);
                     return {convertedAmount, currency:toCurrency};
              }
              catch(err){
                     console.error(`Error in conversion ${err}`);
                     
              }
       }
}