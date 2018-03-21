import { Injectable } from '@angular/core';
import { AbstractBarService } from './abstract-bar.service';

@Injectable()
export class Bar2Service extends AbstractBarService {

  constructor() {
    super();
  }

  public exec() {
    console.log('Bar2Service-exec()');
  }
}
