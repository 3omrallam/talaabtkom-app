import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninButtonBlockComponent } from './signin-button-block.component';

describe('SigninButtonBlockComponent', () => {
  let component: SigninButtonBlockComponent;
  let fixture: ComponentFixture<SigninButtonBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninButtonBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninButtonBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
