import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LibListComponent } from "./list.component";

@NgModule({
  declarations: [LibListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LibListComponent
  ]
})
export class LibListModule { }
