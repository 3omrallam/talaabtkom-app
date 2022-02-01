import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackOrderPageComponent } from './track-order-page.component';

describe('TrackOrderPageComponent', () => {
  let component: TrackOrderPageComponent;
  let fixture: ComponentFixture<TrackOrderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackOrderPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
