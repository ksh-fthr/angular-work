import { Injectable } from '@angular/core';
import { AbstractBarService } from './abstract-bar.service';

@Injectable()
export class HogeService {

  constructor() { }

  public exec<T extends AbstractBarService>(instance: T) {
    instance.exec();
  }
}
