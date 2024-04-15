import { Injectable } from "@nestjs/common";
import axios from "axios";
import * as cache from 'memory-cache';

@Injectable()
export class FxAnalyzerService{
  private readonly CACHE_PRE = 'fxAnalyzer_';

  async fetchFX(
       fromCurrency: string,
       toCurrency: string,
  ): Promise<string | null>{
       const cacheKey = this.generateCacheKey(fromCurrency, toCurrency);
       const cacheRate = cache.get(cacheKey);
       if(cacheRate){
              return cacheRate;
       }

       try{
          const res = await axios.get(
                 `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${fromCurrency}&to_currency=${toCurrency}&apikey=${process.env.MY_API_KEY}`
          );
          const rate = res.data['Latest Currency exchange Rate']   ['5. Exchange Rate'];
          // Fetched rate for 1 min....
          cache.put(cacheKey,rate,60000);
          return rate;
       }
       catch(error){
          console.error(`Error in fetching FX rates: ${error}`);
          return null;
       }
  }

  private generateCacheKey(fromCurrency:string,
   toCurrency: string
  ): string{
       return `${this.CACHE_PRE} ${fromCurrency}_${toCurrency}`;
  }

  async converter(
       fromCurrency: string, 
       toCurrency: string,
       amount: number,
       uniqueId: string,
  ): Promise<number>{
       const checkId = cache.get(uniqueId);
       if(!checkId){
         throw new Error(`Invalid/Expired uniqueID`);
       }

       const finalRate = checkId[fromCurrency][toCurrency];

       if(!finalRate)
       {
         throw new Error(`Invalid conversion`);   
       }
      const finalAmout = amount * finalRate;
      return finalAmout; 
  }
}