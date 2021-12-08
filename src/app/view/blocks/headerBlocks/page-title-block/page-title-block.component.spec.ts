import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTitleBlockComponent } from './page-title-block.component';

describe('PageTitleBlockComponent', () => {
  let component: PageTitleBlockComponent;
  let fixture: ComponentFixture<PageTitleBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTitleBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTitleBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
