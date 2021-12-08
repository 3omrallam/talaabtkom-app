import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantProfilePageComponent } from './resturant-profile-page.component';

describe('ResturantProfilePageComponent', () => {
  let component: ResturantProfilePageComponent;
  let fixture: ComponentFixture<ResturantProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturantProfilePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
