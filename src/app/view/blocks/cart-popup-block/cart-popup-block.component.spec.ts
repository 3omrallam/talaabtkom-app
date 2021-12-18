import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPopupBlockComponent } from './cart-popup-block.component';

describe('CartPopupBlockComponent', () => {
  let component: CartPopupBlockComponent;
  let fixture: ComponentFixture<CartPopupBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartPopupBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPopupBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
