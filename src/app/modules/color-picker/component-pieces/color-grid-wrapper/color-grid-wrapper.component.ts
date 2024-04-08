import {
  Component,
  ElementRef,
  forwardRef,
  Input,
  OnInit,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  UntypedFormControl,
} from '@angular/forms';
import { defaultColors } from 'src/app/core/constants';

@Component({
  selector: 'app-color-grid-wrapper',
  templateUrl: './color-grid-wrapper.component.html',
  styleUrls: ['./color-grid-wrapper.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ColorGridWrapperComponent),
      multi: true,
    },
  ],
})
export class ColorGridWrapperComponent implements OnInit, ControlValueAccessor {
  @Input() public colors: string[] = defaultColors;

  @Input() colorFormControl: UntypedFormControl;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {}

  public onColorChange(color: string): void {
    this.colorFormControl.patchValue(color);
  }

  public onChange = (color: string) => {
    const index = this.colors.indexOf(color);
    const thisGirlElement = this.elementRef.nativeElement.querySelector(
      '#color-option-' + (index + 1)
    );
    if (thisGirlElement) {
      thisGirlElement.focus();
    }
  };

  public onTouched = () => {
    this.colorFormControl.markAsTouched();
  };

  public writeValue(color: string): void {
    this.colorFormControl.patchValue(color);
    this.onChange(color);
  }

  public registerOnChange(fn: (color: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.colorFormControl.disable();
    } else {
      this.colorFormControl.enable();
    }
  }

  public selectColor(color: string): void {
    if (!this.colorFormControl.disabled) {
      this.colorFormControl.patchValue(color);
      this.onChange(color);
      this.onTouched();
    }
  }

  public onMoveChange(direction: string): void {
    switch (direction) {
      case 'up':
        this.onMoveUp();
        break;

      case 'down':
        this.onMoveDown();
        break;

      case 'left':
        this.onMoveLeft();
        break;

      case 'right':
        this.onMoveRight();
        break;
    }
  }

  public onMoveUp(): void {
    const noOfColumns = this.calculateNumberOfColumnsOfGrid();
    const currentColor = this.colorFormControl?.value;
    let selectedIndex = this.colors.indexOf(currentColor);

    if (selectedIndex - noOfColumns >= 0) {
      selectedIndex -= noOfColumns;
      this.selectColor(this.colors[selectedIndex]);
    } else {
      var lastRowIndex = Math.floor(this.colors.length / noOfColumns);
      selectedIndex = lastRowIndex * noOfColumns + selectedIndex;
      if (selectedIndex < this.colors.length) {
        this.selectColor(this.colors[selectedIndex]);
      } else {
        selectedIndex = this.colors.length - 1;
        this.selectColor(this.colors[selectedIndex]);
      }
    }
  }

  public onMoveDown(): void {
    const noOfColumns = this.calculateNumberOfColumnsOfGrid();
    const currentColor = this.colorFormControl?.value;
    let selectedIndex = this.colors.indexOf(currentColor);

    if (selectedIndex + noOfColumns < this.colors.length) {
      selectedIndex += noOfColumns;
      this.selectColor(this.colors[selectedIndex]);
    } else {
      if (selectedIndex >= noOfColumns) {
        selectedIndex = selectedIndex % noOfColumns;
        this.selectColor(this.colors[selectedIndex]);
      } else {
        selectedIndex = this.colors.length - 1;
        this.selectColor(this.colors[selectedIndex]);
      }
    }
  }

  public onMoveLeft(): void {
    const currentColor = this.colorFormControl?.value;
    let selectedIndex = this.colors.indexOf(currentColor);
    if (selectedIndex > 0) {
      selectedIndex--;
      this.selectColor(this.colors[selectedIndex]);
    } else {
      selectedIndex = this.colors.length - 1;
      this.selectColor(this.colors[selectedIndex]);
    }
  }

  public onMoveRight(): void {
    const currentColor = this.colorFormControl?.value;
    let selectedIndex = this.colors.indexOf(currentColor);
    if (selectedIndex < this.colors.length - 1) {
      selectedIndex++;
      this.selectColor(this.colors[selectedIndex]);
    } else {
      selectedIndex = 0;
      this.selectColor(this.colors[selectedIndex]);
    }
  }

  public calculateNumberOfColumnsOfGrid(): number {
    const gridContainer =
      this.elementRef.nativeElement.querySelector('#grid-container');
    const gridItem = this.elementRef.nativeElement.querySelector('.grid-item');

    const gridContainerPadding = 40 + 40; // ? Why - Padding Left + Padding Right
    const gridContainerWidth = gridContainer.getBoundingClientRect().width;
    const effectiveGridContainerWidth =
      gridContainerWidth - gridContainerPadding;
    const gridItemWidth = gridItem.getBoundingClientRect().width;
    const gapWidth = 10;

    const numberOfColumns = Math.floor(
      (effectiveGridContainerWidth + gapWidth) / (gridItemWidth + gapWidth)
    );
    return numberOfColumns;
  }
}
