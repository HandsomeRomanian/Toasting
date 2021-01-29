import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToastingComponent } from './toasting.component';



@NgModule({
  declarations: [ToastingComponent],
  imports: [
    CommonModule
  ],
  exports: [ToastingComponent]
})
export class ToastingModule { }
