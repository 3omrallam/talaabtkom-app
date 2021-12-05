import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantsListPageComponent } from './resturants-list-page.component';

describe('ResturantsListPageComponent', () => {
  let component: ResturantsListPageComponent;
  let fixture: ComponentFixture<ResturantsListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturantsListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
