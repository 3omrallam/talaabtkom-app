import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterContainerLayoutComponent } from './master-container-layout.component';

describe('MasterContainerLayoutComponent', () => {
  let component: MasterContainerLayoutComponent;
  let fixture: ComponentFixture<MasterContainerLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterContainerLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterContainerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
