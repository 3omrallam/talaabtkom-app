import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressMapPopupComponent } from './address-map-popup.component';

describe('AddressMapPopupComponent', () => {
  let component: AddressMapPopupComponent;
  let fixture: ComponentFixture<AddressMapPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressMapPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressMapPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
