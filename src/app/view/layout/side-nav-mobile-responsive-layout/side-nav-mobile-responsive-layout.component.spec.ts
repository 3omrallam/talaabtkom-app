import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavMobileResponsiveLayoutComponent } from './side-nav-mobile-responsive-layout.component';

describe('SideNavMobileResponsiveLayoutComponent', () => {
  let component: SideNavMobileResponsiveLayoutComponent;
  let fixture: ComponentFixture<SideNavMobileResponsiveLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavMobileResponsiveLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavMobileResponsiveLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
