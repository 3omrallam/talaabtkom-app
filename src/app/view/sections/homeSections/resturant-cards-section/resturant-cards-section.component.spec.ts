import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantCardsSectionComponent } from './resturant-cards-section.component';

describe('ResturantCardsSectionComponent', () => {
  let component: ResturantCardsSectionComponent;
  let fixture: ComponentFixture<ResturantCardsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturantCardsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantCardsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
