import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendOtpForgetpasswordBlockComponent } from './send-otp-forgetpassword-block.component';

describe('SendOtpForgetpasswordBlockComponent', () => {
  let component: SendOtpForgetpasswordBlockComponent;
  let fixture: ComponentFixture<SendOtpForgetpasswordBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendOtpForgetpasswordBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendOtpForgetpasswordBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
