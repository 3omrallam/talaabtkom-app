import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemsBlockComponent } from './cart-items-block.component';

describe('CartItemsBlockComponent', () => {
  let component: CartItemsBlockComponent;
  let fixture: ComponentFixture<CartItemsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartItemsBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
