import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantPageComponent } from './resturant-page.component';

describe('ResturantPageComponent', () => {
  let component: ResturantPageComponent;
  let fixture: ComponentFixture<ResturantPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturantPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
