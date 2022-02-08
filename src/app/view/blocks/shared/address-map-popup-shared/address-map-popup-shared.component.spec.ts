import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressMapPopupSharedComponent } from './address-map-popup-shared.component';

describe('AddressMapPopupSharedComponent', () => {
  let component: AddressMapPopupSharedComponent;
  let fixture: ComponentFixture<AddressMapPopupSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressMapPopupSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressMapPopupSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
