import { Module } from "@nestjs/common";
import { FxAnalyzerService } from "./fx-analyzer.service";
import { FXAnalyzerController } from "./fx-analyzer.controller";

@Module({
       providers:[FxAnalyzerService],
       controllers:[FXAnalyzerController],
})
export class FxAnalyzerModule{}