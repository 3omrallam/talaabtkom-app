import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSelectionBlockComponent } from './filter-selection-block.component';

describe('FilterSelectionBlockComponent', () => {
  let component: FilterSelectionBlockComponent;
  let fixture: ComponentFixture<FilterSelectionBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterSelectionBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSelectionBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
