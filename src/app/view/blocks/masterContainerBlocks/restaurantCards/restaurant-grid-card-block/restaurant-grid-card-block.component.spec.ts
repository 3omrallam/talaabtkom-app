import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantGridCardBlockComponent } from './restaurant-grid-card-block.component';

describe('RestaurantGridCardBlockComponent', () => {
  let component: RestaurantGridCardBlockComponent;
  let fixture: ComponentFixture<RestaurantGridCardBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantGridCardBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantGridCardBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
