import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { FxAnalyzerService } from "./fx-analyzer.service";
import { v4 as uuidv4 } from 'uuid';
import * as cache from 'memory-cache';

@Controller('fx-analyzer')
export class FXAnalyzerController{
       constructor(private readonly fxAnalyzerService: FxAnalyzerService){}
       @Get()
       async fetchFXAmount(
              @Query('fromCurrency')
              fromCurrency: string,
              @Query('toCurrency')
              toCurrency: string,
       ): Promise<string | null>{
              return this.fxAnalyzerService.fetchFX(fromCurrency, toCurrency);
       }

       @Get()
       async fetchFXAmountDisplay():
       Promise<{
         uniqueId: string;
         expiry_at: Number;
         fxAmount: any;
       }>{
              const fxAmount = cache.keys().map((key) => ({
                     fromCurrency: key.split('_')[1],
                     toCurrency: key.split('_')[2],
                     amount: cache.get(key),
                   }));
                   const uniqueId = uuidv4();
                   const expiry_at = Date.now() + (30 * 1000);
                   return { uniqueId, expiry_at, fxAmount };
       }

       @Post('conversion')
       async performConversion(@Body() conversionData: any): 
       Promise<{
         finalAmount: number,
         currency: string
       }> {
       const { uniqueId, fromCurrency, toCurrency, amount } = conversionData;
       const finalAmount = await this.fxAnalyzerService.converter(fromCurrency, toCurrency, amount, uniqueId);
       return {finalAmount, currency: toCurrency};
      }
}