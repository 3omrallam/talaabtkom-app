import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddressPopupBlockComponent } from './form-address-popup-block.component';

describe('FormAddressPopupBlockComponent', () => {
  let component: FormAddressPopupBlockComponent;
  let fixture: ComponentFixture<FormAddressPopupBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddressPopupBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddressPopupBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
