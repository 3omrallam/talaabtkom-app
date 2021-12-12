import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPopupSharedComponent } from './login-popup-shared.component';

describe('LoginPopupSharedComponent', () => {
  let component: LoginPopupSharedComponent;
  let fixture: ComponentFixture<LoginPopupSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPopupSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPopupSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
