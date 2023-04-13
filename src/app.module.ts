import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MatakuliahModule } from './matakuliah/matakuliah.module';

@Module({
  imports: [MatakuliahModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
