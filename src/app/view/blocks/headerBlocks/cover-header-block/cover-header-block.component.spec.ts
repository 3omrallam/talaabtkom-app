import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverHeaderBlockComponent } from './cover-header-block.component';

describe('CoverHeaderBlockComponent', () => {
  let component: CoverHeaderBlockComponent;
  let fixture: ComponentFixture<CoverHeaderBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoverHeaderBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverHeaderBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
