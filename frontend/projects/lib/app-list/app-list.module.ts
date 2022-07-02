import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LibAppListComponent } from "./app-list.component";

@NgModule({
  declarations: [LibAppListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LibAppListComponent
  ]
})
export class LibAppListModule { }
