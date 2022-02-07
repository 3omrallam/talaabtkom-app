import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationCardBlockComponent } from './notification-card-block.component';

describe('NotificationCardBlockComponent', () => {
  let component: NotificationCardBlockComponent;
  let fixture: ComponentFixture<NotificationCardBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationCardBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationCardBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
