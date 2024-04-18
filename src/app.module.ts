import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FXAnalyzerController } from './fx-analyzer/fx-analyzer.controller';
import { FxAnalyzerService } from './fx-analyzer/fx-analyzer.service';
import { FxAnalyzerModule } from './fx-analyzer/fx-analyzer.module';

@Module({
  imports: [FxAnalyzerModule],
  controllers: [AppController, FXAnalyzerController],
  providers: [AppService, FxAnalyzerService],
})
export class AppModule {}
