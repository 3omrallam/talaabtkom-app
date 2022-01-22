import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalReceiptBlockComponent } from './total-receipt-block.component';

describe('TotalReceiptBlockComponent', () => {
  let component: TotalReceiptBlockComponent;
  let fixture: ComponentFixture<TotalReceiptBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalReceiptBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalReceiptBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
