import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MatakuliahController } from './matakuliah/matakuliah.controller';

@Module({
  imports: [MatakuliahController],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
