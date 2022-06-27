import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LibLayoutComponent } from "./layout.component";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [LibLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule
  ],
  exports: [
    LibLayoutComponent
  ]
})
export class LibLayoutModule { }
