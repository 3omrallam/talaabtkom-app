import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantInformationPageComponent } from './resturant-information-page.component';

describe('ResturantInformationPageComponent', () => {
  let component: ResturantInformationPageComponent;
  let fixture: ComponentFixture<ResturantInformationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturantInformationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantInformationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
