import { Injectable } from "@nestjs/common";
import * as cache from 'memory-cache';
import axios  from "axios";

@Injectable()
export class FXconversionService{
       async convertFX(
              fromCurrency: string,
              toCurrency: string,
              amount: number,
              uniqueId: string,
       ): Promise<number> {
              const cacheFXRate = cache.get(uniqueId);
              if(!cacheFXRate)
                     {
                       console.error(`Invalid/EXpired token`);     
                     }
              
              const conversionRate = cacheFXRate[fromCurrency][toCurrency];
              if(!conversionRate){
                     console.error(`Conversion Not available`);
                     
              }
              const finalAmount = amount * conversionRate;
              return finalAmount;
       }
}