import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorGridSelectComponent } from './components/color-grid-select/color-grid-select.component';

const routes: Routes = [
  {
    path: '',
    component: ColorGridSelectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColorPickerRoutingModule { }
