import { Module } from '@nestjs/common';
import { FXConversionController } from './fx-conversion.controller';
import { FXconversionService } from './fx-conversion.service';

@Module({
       providers: [FXconversionService],
       controllers: [FXConversionController]
})
export class FxConversionModule {}
