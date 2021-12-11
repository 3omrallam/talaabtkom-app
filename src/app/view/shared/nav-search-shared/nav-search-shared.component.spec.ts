import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSearchSharedComponent } from './nav-search-shared.component';

describe('NavSearchSharedComponent', () => {
  let component: NavSearchSharedComponent;
  let fixture: ComponentFixture<NavSearchSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavSearchSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSearchSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
