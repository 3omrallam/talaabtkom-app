import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickerBlockComponent } from './sticker-block.component';

describe('StickerBlockComponent', () => {
  let component: StickerBlockComponent;
  let fixture: ComponentFixture<StickerBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickerBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StickerBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
