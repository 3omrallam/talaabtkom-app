import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMethodsBlockComponent } from './payment-methods-block.component';

describe('PaymentMethodsBlockComponent', () => {
  let component: PaymentMethodsBlockComponent;
  let fixture: ComponentFixture<PaymentMethodsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentMethodsBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentMethodsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
