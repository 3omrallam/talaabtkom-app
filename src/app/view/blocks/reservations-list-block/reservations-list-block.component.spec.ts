import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsListBlockComponent } from './reservations-list-block.component';

describe('ReservationsListBlockComponent', () => {
  let component: ReservationsListBlockComponent;
  let fixture: ComponentFixture<ReservationsListBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationsListBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationsListBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
