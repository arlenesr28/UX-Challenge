import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalCalendarComponent } from './vertical-calendar.component';

describe('VerticalCalendarComponent', () => {
  let component: VerticalCalendarComponent;
  let fixture: ComponentFixture<VerticalCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
