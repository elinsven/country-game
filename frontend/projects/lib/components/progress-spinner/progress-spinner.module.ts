import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibProgressSpinnerComponent } from './progress-spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [LibProgressSpinnerComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    LibProgressSpinnerComponent
  ]
})
export class LibProgressSpinnerModule { }
