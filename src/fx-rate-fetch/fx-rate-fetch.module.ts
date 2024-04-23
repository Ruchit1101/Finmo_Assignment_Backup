import { Module } from '@nestjs/common';
import { FxRatesFetchService } from './fx-rate-fetch.service';
import { FXRateFetchController } from './fx-rate-fetch.controller';

@Module({
       providers: [FxRatesFetchService],
       controllers: [FXRateFetchController]
})
export class FxRateFetchModule {}
