import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllReservationsBlockComponent } from './all-reservations-block.component';

describe('AllReservationsBlockComponent', () => {
  let component: AllReservationsBlockComponent;
  let fixture: ComponentFixture<AllReservationsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllReservationsBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllReservationsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
