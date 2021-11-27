import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatorBlockComponent } from './navigator-block.component';

describe('NavigatorBlockComponent', () => {
  let component: NavigatorBlockComponent;
  let fixture: ComponentFixture<NavigatorBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigatorBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigatorBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
