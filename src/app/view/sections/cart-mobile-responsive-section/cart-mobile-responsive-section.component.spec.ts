import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartMobileResponsiveSectionComponent } from './cart-mobile-responsive-section.component';

describe('CartMobileResponsiveSectionComponent', () => {
  let component: CartMobileResponsiveSectionComponent;
  let fixture: ComponentFixture<CartMobileResponsiveSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartMobileResponsiveSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartMobileResponsiveSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
