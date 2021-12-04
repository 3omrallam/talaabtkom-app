import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantGridCardBlockComponent } from './resturant-grid-card-block.component';

describe('ResturantGridCardBlockComponent', () => {
  let component: ResturantGridCardBlockComponent;
  let fixture: ComponentFixture<ResturantGridCardBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturantGridCardBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantGridCardBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
