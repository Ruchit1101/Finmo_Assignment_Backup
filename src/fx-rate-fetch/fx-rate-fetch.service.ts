import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as cache from 'memory-cache';
@Injectable()
export class FxRatesService {
       private readonly CACHE_KEY_PRE = 'fxRate_';

       // FETCHING FX RATES FROM THE EXTERNAL API AND STORING IT IN CACHE FOR 30 sec...
       async fetchFXRate(fromCurrency: string, toCurrency: string): Promise<string | null>{
              const cacheKey = this.generateCacheKey(fromCurrency, toCurrency);
              const cachedFXRate = cache.get(cacheKey);
             if(cachedFXRate != undefined)
              {
                     return cachedFXRate;
              }
              try{
                     const res = await axios.get('https://www.alphavantage.co/query',{
                            params:{
                                   function: 'CURRENCY_EXCHANGE_RATE',
                                   from_currency: fromCurrency,
                                   to_currency: toCurrency,
                                   apikey: process.env.API_KEY
                            }
                     });
                     const fxRatefromAPI = res.data['Realtime Currency Exchange Rate']['5. Exchange Rate'];
                     // Putting in cache memory....
                     cache.put(cacheKey, fxRatefromAPI, 30000);
                     console.log(fxRatefromAPI);
                     
                     return fxRatefromAPI;
              }catch(err){
                     console.error(`Error in API Fetching ${err}`);
                     return null;
              }
       }
       private generateCacheKey(fromCurrency: string, toCurrency: string): string{
              return (`${this.CACHE_KEY_PRE}${fromCurrency}_${toCurrency}`);
       }
       async convertFX(
              fromCurrency: string,
              toCurrency: string,
              amount: number,
              uniqueId: string,
       ): Promise<number>{
              const cached = cache.get(uniqueId);
              if(!cached)
                     {
                       console.error(`Invalid/Expired token in conversion `);       
                     }
                     const conversionRate = cached[fromCurrency][toCurrency];
                     if (!conversionRate) {
                       throw new Error(
                         'Conversion rate not available for the specified currencies',
                       );
                     }
                     // Calculate the converted amount
                     const convertedAmount = amount * conversionRate;
                     const check = false;
                     return convertedAmount;
                     
                   
       }
}
