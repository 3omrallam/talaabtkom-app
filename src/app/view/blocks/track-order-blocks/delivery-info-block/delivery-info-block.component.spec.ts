import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryInfoBlockComponent } from './delivery-info-block.component';

describe('DeliveryInfoBlockComponent', () => {
  let component: DeliveryInfoBlockComponent;
  let fixture: ComponentFixture<DeliveryInfoBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryInfoBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryInfoBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
