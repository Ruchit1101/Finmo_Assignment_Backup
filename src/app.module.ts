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
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import { Balance } from './account/balance.entity';
dotenv.config();
@Module({
  imports: [ TypeOrmModule.forRoot({
    type:'mysql',
    // All the database related will be here...Finmo_Database
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT, 10) || 3306,
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || "Finmo_Database",
    entities: [Account, Balance],
    synchronize: true,
  }),
  TypeOrmModule.forFeature([Account]),
  FxRatesModule, FxConversionModule, FxRateFetchModule, AccountModule,
     
  ],
  controllers: [AppController],
  providers: [AppService, FxRatesService, AccountService, FxRatesFetchService, FXconversionService,

  ],
})
export class AppModule {
  constructor() {
  }

  static async setupSwagger(app: INestApplication) {
    const options = new DocumentBuilder()
      .setTitle('FinmoAPIs')
      .setDescription('DocumentingAPIs')
      .setVersion('1.0.0')
      .build();
    
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);
  }
}

