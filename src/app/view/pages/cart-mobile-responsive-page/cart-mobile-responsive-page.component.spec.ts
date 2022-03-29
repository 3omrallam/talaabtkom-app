import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartMobileResponsivePageComponent } from './cart-mobile-responsive-page.component';

describe('CartMobileResponsivePageComponent', () => {
  let component: CartMobileResponsivePageComponent;
  let fixture: ComponentFixture<CartMobileResponsivePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartMobileResponsivePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartMobileResponsivePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
