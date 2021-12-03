import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuQrcodeSectionComponent } from './menu-qrcode-section.component';

describe('MenuQrcodeSectionComponent', () => {
  let component: MenuQrcodeSectionComponent;
  let fixture: ComponentFixture<MenuQrcodeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuQrcodeSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuQrcodeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
