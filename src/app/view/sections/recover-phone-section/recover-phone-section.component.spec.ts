import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverPhoneSectionComponent } from './recover-phone-section.component';

describe('RecoverPhoneSectionComponent', () => {
  let component: RecoverPhoneSectionComponent;
  let fixture: ComponentFixture<RecoverPhoneSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecoverPhoneSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoverPhoneSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
