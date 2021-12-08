import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantInformationSectionComponent } from './resturant-information-section.component';

describe('ResturantInformationSectionComponent', () => {
  let component: ResturantInformationSectionComponent;
  let fixture: ComponentFixture<ResturantInformationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturantInformationSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantInformationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
