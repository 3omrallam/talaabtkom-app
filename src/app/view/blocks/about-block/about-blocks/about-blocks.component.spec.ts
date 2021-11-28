import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBlocksComponent } from './about-blocks.component';

describe('AboutBlocksComponent', () => {
  let component: AboutBlocksComponent;
  let fixture: ComponentFixture<AboutBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutBlocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
