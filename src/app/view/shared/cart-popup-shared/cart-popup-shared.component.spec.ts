import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPopupSharedComponent } from './cart-popup-shared.component';

describe('CartPopupSharedComponent', () => {
  let component: CartPopupSharedComponent;
  let fixture: ComponentFixture<CartPopupSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartPopupSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPopupSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
