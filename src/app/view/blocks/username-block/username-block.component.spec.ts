import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameBlockComponent } from './username-block.component';

describe('UsernameBlockComponent', () => {
  let component: UsernameBlockComponent;
  let fixture: ComponentFixture<UsernameBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsernameBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernameBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
