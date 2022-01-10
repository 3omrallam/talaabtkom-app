import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteReservationsBlockComponent } from './complete-reservations-block.component';

describe('CompleteReservationsBlockComponent', () => {
  let component: CompleteReservationsBlockComponent;
  let fixture: ComponentFixture<CompleteReservationsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteReservationsBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteReservationsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
