import { Injectable } from '@nestjs/common';

@Injectable()
export class MatakuliahService {
  getMataKuliah(): [string] {
    return ['bahasa pemrograman'];
  }
}
