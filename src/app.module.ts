import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FXAnalyzerController } from './fx-analyzer/fx-analyzer.controller';
import { FxAnalyzerService } from './fx-analyzer/fx-analyzer.service';
import { FxAnalyzerModule } from './fx-analyzer/fx-analyzer.module';
import * as dotenv from 'dotenv';
dotenv.config();
@Module({
  imports: [FxAnalyzerModule,
    // RecordModule
    MongooseModule.forRoot(process.env.MY_DATABASE)
  ],
  controllers: [AppController, FXAnalyzerController],
  providers: [AppService, FxAnalyzerService],
})
export class AppModule {}
