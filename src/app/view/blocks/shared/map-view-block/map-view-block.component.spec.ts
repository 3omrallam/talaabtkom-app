import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapViewBlockComponent } from './map-view-block.component';

describe('MapViewBlockComponent', () => {
  let component: MapViewBlockComponent;
  let fixture: ComponentFixture<MapViewBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapViewBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapViewBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
