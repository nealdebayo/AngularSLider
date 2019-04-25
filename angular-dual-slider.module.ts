import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DualSliderComponent } from './dual-slider/dual-slider.component';
import {MatButtonModule, MatCheckboxModule, MatGridListModule} from '@angular/material';

@NgModule({
  declarations: [DualSliderComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    DualSliderComponent
  ]
})
export class AngularDualSliderModule { }
