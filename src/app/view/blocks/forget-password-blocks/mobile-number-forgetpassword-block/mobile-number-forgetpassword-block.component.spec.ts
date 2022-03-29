import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNumberForgetpasswordBlockComponent } from './mobile-number-forgetpassword-block.component';

describe('MobileNumberForgetpasswordBlockComponent', () => {
  let component: MobileNumberForgetpasswordBlockComponent;
  let fixture: ComponentFixture<MobileNumberForgetpasswordBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileNumberForgetpasswordBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileNumberForgetpasswordBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
