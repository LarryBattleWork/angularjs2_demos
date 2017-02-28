import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountBy2Component } from './count-by2.component';

describe('CountBy2Component', () => {
  let component: CountBy2Component;
  let fixture: ComponentFixture<CountBy2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountBy2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountBy2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
