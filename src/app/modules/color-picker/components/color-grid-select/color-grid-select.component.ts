import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { defaultColors } from 'src/app/core/constants';

@Component({
  selector: 'app-color-grid-select',
  templateUrl: './color-grid-select.component.html',
  styleUrls: ['./color-grid-select.component.scss'],
})
export class ColorGridSelectComponent implements OnInit {
  public colors: string[] = defaultColors;
  public colorFormControl: UntypedFormControl;

  constructor() {}

  ngOnInit(): void {
    this.initFormControls();
  }

  public initFormControls(): void {
    this.colorFormControl = new UntypedFormControl(null);
  }
}
