import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNumberBlockComponent } from './phone-number-block.component';

describe('PhoneNumberBlockComponent', () => {
  let component: PhoneNumberBlockComponent;
  let fixture: ComponentFixture<PhoneNumberBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneNumberBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneNumberBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
