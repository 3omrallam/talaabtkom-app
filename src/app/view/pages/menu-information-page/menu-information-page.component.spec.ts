import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuInformationPageComponent } from './menu-information-page.component';

describe('MenuInformationPageComponent', () => {
  let component: MenuInformationPageComponent;
  let fixture: ComponentFixture<MenuInformationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuInformationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuInformationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
