import { Module } from '@nestjs/common';
import {ObjectiveModule} from "./objectives/objective.module";
import { KeyResultsModule } from './key-results/key-results.module';
import {ConfigModule} from "@nestjs/config";


@Module({
  imports: [ObjectiveModule, KeyResultsModule,
    ConfigModule.forRoot({
      isGlobal: true, // Makes the ConfigService available everywhere
    }),]

})
export class AppModule {}
