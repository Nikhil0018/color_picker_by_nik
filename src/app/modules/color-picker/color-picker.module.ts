import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorPickerRoutingModule } from './color-picker-routing.module';
import { ColorGridSelectComponent } from './components/color-grid-select/color-grid-select.component';
import { ColorItemComponent } from './component-pieces/color-item/color-item.component';
import { ColorGridWrapperComponent } from './component-pieces/color-grid-wrapper/color-grid-wrapper.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ColorGridSelectComponent,
    ColorItemComponent,
    ColorGridWrapperComponent
  ],
  imports: [
    CommonModule,
    ColorPickerRoutingModule,
    SharedModule
  ]
})
export class ColorPickerModule { }
