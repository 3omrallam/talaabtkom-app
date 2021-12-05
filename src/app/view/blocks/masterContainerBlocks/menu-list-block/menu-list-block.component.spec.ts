import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuListBlockComponent } from './menu-list-block.component';

describe('MenuListBlockComponent', () => {
  let component: MenuListBlockComponent;
  let fixture: ComponentFixture<MenuListBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuListBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuListBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
