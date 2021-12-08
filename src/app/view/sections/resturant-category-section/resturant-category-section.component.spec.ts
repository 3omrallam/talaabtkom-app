import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantCategorySectionComponent } from './resturant-category-section.component';

describe('ResturantCategorySectionComponent', () => {
  let component: ResturantCategorySectionComponent;
  let fixture: ComponentFixture<ResturantCategorySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturantCategorySectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantCategorySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
