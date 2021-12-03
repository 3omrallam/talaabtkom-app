import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterNavigatorBlockComponent } from './footer-navigator-block.component';

describe('FooterNavigatorBlockComponent', () => {
  let component: FooterNavigatorBlockComponent;
  let fixture: ComponentFixture<FooterNavigatorBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterNavigatorBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterNavigatorBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
