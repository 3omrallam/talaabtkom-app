import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReservationsSectionComponent } from './user-reservations-section.component';

describe('UserReservationsSectionComponent', () => {
  let component: UserReservationsSectionComponent;
  let fixture: ComponentFixture<UserReservationsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserReservationsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReservationsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
