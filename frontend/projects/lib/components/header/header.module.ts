import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LibHeaderComponent } from "./header.component";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [LibHeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule
  ],
  exports: [
    LibHeaderComponent
  ]
})
export class LibHeaderModule { }
