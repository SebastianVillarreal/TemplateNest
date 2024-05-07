import { Module } from '@nestjs/common';
import { GateWayModule } from './webSockets/wbesocket.module';
import { BookModule } from './book/book.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env',
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    GateWayModule, BookModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
