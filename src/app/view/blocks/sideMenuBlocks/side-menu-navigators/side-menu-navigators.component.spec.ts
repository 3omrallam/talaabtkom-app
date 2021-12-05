import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuNavigatorsComponent } from './side-menu-navigators.component';

describe('SideMenuNavigatorsComponent', () => {
  let component: SideMenuNavigatorsComponent;
  let fixture: ComponentFixture<SideMenuNavigatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideMenuNavigatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuNavigatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
