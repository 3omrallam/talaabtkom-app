import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPasswordSectionComponent } from './forget-password-section.component';

describe('ForgetPasswordSectionComponent', () => {
  let component: ForgetPasswordSectionComponent;
  let fixture: ComponentFixture<ForgetPasswordSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetPasswordSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetPasswordSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
