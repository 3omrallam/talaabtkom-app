import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressInfoBlockComponent } from './address-info-block.component';

describe('AddressInfoBlockComponent', () => {
  let component: AddressInfoBlockComponent;
  let fixture: ComponentFixture<AddressInfoBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressInfoBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressInfoBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
