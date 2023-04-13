import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MatakuliahModule } from './matakuliah/matakuliah.module';
import { DatabaseModule } from './database/database.module';


@Module({
  imports: [MatakuliahModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
