import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorGridWrapperComponent } from './color-grid-wrapper.component';

describe('ColorGridWrapperComponent', () => {
  let component: ColorGridWrapperComponent;
  let fixture: ComponentFixture<ColorGridWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorGridWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorGridWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
