import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FxRatesService } from './fx-rates/fx-rates.service';
import { FxRatesModule } from './fx-rates/fx-rates.module';
import { FxConversionModule } from './fx-conversion/fx-conversion.module';

@Module({
  imports: [FxRatesModule, FxConversionModule],
  controllers: [AppController],
  providers: [AppService, FxRatesService],
})
export class AppModule {}
