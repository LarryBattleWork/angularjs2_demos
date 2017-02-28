import { Injectable, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CounterService {

  private _currentClicks : number = 0;

  clicks$ = new Subject<number>();

  increaseBy(step : number){
    this._currentClicks += step;
    console.log( 'counter service .increaseBy() updating clicks$ to ' + this._currentClicks );
    this.clicks$.next( this._currentClicks );
  }

  constructor() {
   }
}
