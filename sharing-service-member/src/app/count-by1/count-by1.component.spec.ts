import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountBy1Component } from './count-by1.component';

describe('CountBy1Component', () => {
  let component: CountBy1Component;
  let fixture: ComponentFixture<CountBy1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountBy1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountBy1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
