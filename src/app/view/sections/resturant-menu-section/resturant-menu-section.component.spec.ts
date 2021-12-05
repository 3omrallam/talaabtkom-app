import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantMenuSectionComponent } from './resturant-menu-section.component';

describe('ResturantMenuSectionComponent', () => {
  let component: ResturantMenuSectionComponent;
  let fixture: ComponentFixture<ResturantMenuSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturantMenuSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantMenuSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
