import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateTrendComponent } from './rate-trend.component';

describe('RateTrendComponent', () => {
  let component: RateTrendComponent;
  let fixture: ComponentFixture<RateTrendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateTrendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
