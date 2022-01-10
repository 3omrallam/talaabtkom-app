import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentReservationsBlockComponent } from './current-reservations-block.component';

describe('CurrentReservationsBlockComponent', () => {
  let component: CurrentReservationsBlockComponent;
  let fixture: ComponentFixture<CurrentReservationsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentReservationsBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentReservationsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
