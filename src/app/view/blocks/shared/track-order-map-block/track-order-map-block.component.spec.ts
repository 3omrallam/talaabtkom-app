import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackOrderMapBlockComponent } from './track-order-map-block.component';

describe('TrackOrderMapBlockComponent', () => {
  let component: TrackOrderMapBlockComponent;
  let fixture: ComponentFixture<TrackOrderMapBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackOrderMapBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackOrderMapBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
