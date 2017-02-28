import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { CounterService } from '../counter.service';

@Component({
  selector: 'app-count-by2',
  templateUrl: './count-by2.component.html',
  styleUrls: ['./count-by2.component.css']
})
export class CountBy2Component implements OnInit {

  clicks: number;
  clickSubscriber: Subscription

  constructor(
    private counterService: CounterService
  ) { }

  ngOnInit() {
    this.clickSubscriber = this.counterService.clicks$.subscribe({
      next: (clicks: number) => this.clicks = clicks,
      error: (err) => console.error('Error with the counter service', err),
      complete: () => {
        console.log('Completed: no more new clicks');
        this.clickSubscriber.unsubscribe();
      }
    })
  }

  add2() {
    this.counterService.increaseBy(2);
  }

}
