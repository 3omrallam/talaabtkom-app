import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantListCardBlockComponent } from './resturant-list-card-block.component';

describe('ResturantListCardBlockComponent', () => {
  let component: ResturantListCardBlockComponent;
  let fixture: ComponentFixture<ResturantListCardBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturantListCardBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantListCardBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
