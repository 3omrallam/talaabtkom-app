import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarBlockComponent } from './search-bar-block.component';

describe('SearchBarBlockComponent', () => {
  let component: SearchBarBlockComponent;
  let fixture: ComponentFixture<SearchBarBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBarBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
