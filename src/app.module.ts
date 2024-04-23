import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FxRatesService } from './fx-rates/fx-rates.service';
import { FxRatesModule } from './fx-rates/fx-rates.module';
import { FxConversionModule } from './fx-conversion/fx-conversion.module';
import { FxRateFetchModule } from './fx-rate-fetch/fx-rate-fetch.module';
import { AccountModule } from './account/account.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { AccountService } from './account/account.service';
import { FxRatesFetchService } from './fx-rate-fetch/fx-rate-fetch.service';
import { FXconversionService } from './fx-conversion/fx-conversion.service';
import { Account } from './account/account.entity';

dotenv.config();
@Module({
  imports: [FxRatesModule, FxConversionModule, FxRateFetchModule, AccountModule,
      TypeOrmModule.forRoot({
        type:'mysql',
      }),
      TypeOrmModule.forFeature([Account])
  ],
  controllers: [AppController],
  providers: [AppService, FxRatesService, AccountService, FxRatesFetchService, FXconversionService,

  ],
})
export class AppModule {}
