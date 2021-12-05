import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantAsidePageComponent } from './resturant-aside-page.component';

describe('ResturantAsidePageComponent', () => {
  let component: ResturantAsidePageComponent;
  let fixture: ComponentFixture<ResturantAsidePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturantAsidePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantAsidePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
