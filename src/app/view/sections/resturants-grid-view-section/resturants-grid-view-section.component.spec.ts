import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantsGridViewSectionComponent } from './resturants-grid-view-section.component';

describe('ResturantsGridViewSectionComponent', () => {
  let component: ResturantsGridViewSectionComponent;
  let fixture: ComponentFixture<ResturantsGridViewSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturantsGridViewSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantsGridViewSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
