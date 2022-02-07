import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFavouriteItemsSectionComponent } from './user-favourite-items-section.component';

describe('UserFavouriteItemsSectionComponent', () => {
  let component: UserFavouriteItemsSectionComponent;
  let fixture: ComponentFixture<UserFavouriteItemsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFavouriteItemsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFavouriteItemsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
