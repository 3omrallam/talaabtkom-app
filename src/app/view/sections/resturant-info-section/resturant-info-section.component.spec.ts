import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantInfoSectionComponent } from './resturant-info-section.component';

describe('ResturantInfoSectionComponent', () => {
  let component: ResturantInfoSectionComponent;
  let fixture: ComponentFixture<ResturantInfoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturantInfoSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantInfoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
