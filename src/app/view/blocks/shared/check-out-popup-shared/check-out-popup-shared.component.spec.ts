import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutPopupSharedComponent } from './check-out-popup-shared.component';

describe('CheckOutPopupSharedComponent', () => {
  let component: CheckOutPopupSharedComponent;
  let fixture: ComponentFixture<CheckOutPopupSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckOutPopupSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckOutPopupSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
