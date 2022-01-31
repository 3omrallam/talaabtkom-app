import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantsHeaderBlockComponent } from './resturants-header-block.component';

describe('ResturantsHeaderBlockComponent', () => {
  let component: ResturantsHeaderBlockComponent;
  let fixture: ComponentFixture<ResturantsHeaderBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturantsHeaderBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantsHeaderBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
