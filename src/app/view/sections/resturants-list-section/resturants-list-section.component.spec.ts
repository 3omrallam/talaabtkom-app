import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantsListSectionComponent } from './resturants-list-section.component';

describe('ResturantsListSectionComponent', () => {
  let component: ResturantsListSectionComponent;
  let fixture: ComponentFixture<ResturantsListSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturantsListSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantsListSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
