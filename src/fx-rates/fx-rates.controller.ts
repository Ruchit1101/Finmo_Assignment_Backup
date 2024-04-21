import { Get, Controller, Query } from "@nestjs/common";
import { FxRatesService } from "./fx-rates.service";
import {v4 as uuidv4} from 'uuid';
import * as cache from 'memory-cache';

@Controller('fx-rates')
export class FxRateController{
       constructor(private readonly fxRateService:FxRatesService){}
       // @Get()
       // async fetchFXRate(
       //        @Query('fromCurrency')fromCurrency:string,
       //        @Query('toCurrency') toCurrecncy:string): Promise<string | null>{
       //               return this.fxRateService.fetchFXRate(fromCurrency, toCurrecncy);
       //        }
       @Get() 
       // TASK 2 FXRATE API FETCHING...
       async fetchFX(): Promise<{
              uniqueId: string;
              expiry_at: number;
              fxRates: any;
            }> {
           try{
              const fxRates = cache.keys().map((key)=>({
                     fromCurrency: key.split('_')[1],
                     toCurrency: key.split('_'[2]),
                     rate: cache.get(key),
              }));
              const uniqueId = uuidv4();
              console.log(`UniqueId: ${uniqueId}`);
              // EXPIRES IN 1 HOUR...
              const expiry_At = Date.now() + 30 * 1000;
              console.log(`Expire At: ${expiry_At}`);
              return {uniqueId, expiry_at:expiry_At, fxRates};
           }
           catch(err){
              console.error(`Failed while fetching FX-RATES ${err}`);
              return null;
           }
             
       }
}