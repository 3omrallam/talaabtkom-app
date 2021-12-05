import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodeBlockComponent } from './qrcode-block.component';

describe('QrcodeBlockComponent', () => {
  let component: QrcodeBlockComponent;
  let fixture: ComponentFixture<QrcodeBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrcodeBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QrcodeBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
