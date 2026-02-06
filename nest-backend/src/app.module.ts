import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import {ObjectiveModule} from "./objectives/objective.module";
import { KeyResultsModule } from './objectives/key-results/key-results.module';
import {ConfigModule} from "@nestjs/config";
import {AuthMiddleware} from "./middleware/auth.middleware";


@Module({
  imports: [ObjectiveModule, KeyResultsModule,
    ConfigModule.forRoot({
      isGlobal: true, // Makes the ConfigService available everywhere
    }),]

})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
      consumer.apply(AuthMiddleware).forRoutes('objectives');
    }
}
