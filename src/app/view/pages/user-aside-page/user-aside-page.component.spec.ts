import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAsidePageComponent } from './user-aside-page.component';

describe('UserAsidePageComponent', () => {
  let component: UserAsidePageComponent;
  let fixture: ComponentFixture<UserAsidePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAsidePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAsidePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
