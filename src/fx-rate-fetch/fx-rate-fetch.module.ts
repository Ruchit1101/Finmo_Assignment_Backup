import { Module } from '@nestjs/common';
import { FxRatesService } from './fx-rate-fetch.service';
import { FXRateFetchController } from './fx-rate-fetch.controller';

@Module({
       providers: [FxRatesService],
       controllers: [FXRateFetchController]
})
export class FxRateFetchModule {}
