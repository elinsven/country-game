import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibSettingsComponent } from './settings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [LibSettingsComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatDividerModule,
    MatSlideToggleModule
  ],
  exports: [
    LibSettingsComponent
  ]
})
export class LibSettingsModule { }