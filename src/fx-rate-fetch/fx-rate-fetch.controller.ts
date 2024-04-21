import { Controller, Get, Query } from "@nestjs/common";
import { FxRatesService } from "./fx-rate-fetch.service";

@Controller('fx-rate-fetch')
export class FXRateFetchController{
 constructor(private readonly fxRateService:FxRatesService){}
    @Get ()
       async fetchFXRate(
              @Query ('fromCurrency')fromCurrency:string,
              @Query('toCurrency') toCurrecncy:string): Promise<string | null>{
                     
                     return this.fxRateService.fetchFXRate(fromCurrency, toCurrecncy);
              }
}