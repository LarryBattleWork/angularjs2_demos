import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { CounterService } from '../counter.service';

@Component({
  selector: 'app-count-by1',
  templateUrl: './count-by1.component.html',
  styleUrls: ['./count-by1.component.css']
})
export class CountBy1Component implements OnInit {

  clicks$ : Observable<number>;
  
  constructor(
    private counterService : CounterService
  ) { }

  ngOnInit() {
    this.clicks$ = this.counterService.clicks$;
  }

  add1(){
    this.counterService.increaseBy(1);
  }
}
