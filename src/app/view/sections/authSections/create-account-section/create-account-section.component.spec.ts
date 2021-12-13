import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountSectionComponent } from './create-account-section.component';

describe('CreateAccountSectionComponent', () => {
  let component: CreateAccountSectionComponent;
  let fixture: ComponentFixture<CreateAccountSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAccountSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
