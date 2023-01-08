import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LibHeaderComponent } from "./header.component";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from "@angular/router";
import { MatMenuModule } from "@angular/material/menu";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [LibHeaderComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule
  ],
  exports: [
    LibHeaderComponent
  ]
})
export class LibHeaderModule { }
