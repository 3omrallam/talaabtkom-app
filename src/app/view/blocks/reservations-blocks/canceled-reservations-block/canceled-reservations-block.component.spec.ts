import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanceledReservationsBlockComponent } from './canceled-reservations-block.component';

describe('CanceledReservationsBlockComponent', () => {
  let component: CanceledReservationsBlockComponent;
  let fixture: ComponentFixture<CanceledReservationsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanceledReservationsBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanceledReservationsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
