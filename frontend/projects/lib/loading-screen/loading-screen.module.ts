import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibLoadingScreenComponent } from './loading-screen.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [LibLoadingScreenComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    LibLoadingScreenComponent
  ]
})
export class LibLoadingScreenModule { }
