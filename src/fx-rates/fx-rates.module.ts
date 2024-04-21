import { Module } from "@nestjs/common";
import { FxRateController } from "./fx-rates.controller";
import { FxRatesService } from "./fx-rates.service";

@Module({
       providers:[FxRatesService],
       controllers: [FxRateController]
})
export class FxRatesModule {}