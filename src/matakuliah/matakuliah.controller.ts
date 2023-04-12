import { Controller, Get } from '@nestjs/common';
import { MatakuliahService } from './matakuliah.service';

@Controller('matakuliah')
export class MatakuliahController {
  constructor(private readonly service: MatakuliahService) {}

  @Get()
  getMataKuliah(): [string] {
    return this.service.getMataKuliah();
  }
}
