import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantStickerBlockComponent } from './resturant-sticker-block.component';

describe('ResturantStickerBlockComponent', () => {
  let component: ResturantStickerBlockComponent;
  let fixture: ComponentFixture<ResturantStickerBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturantStickerBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantStickerBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
