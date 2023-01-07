import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DataListComponent } from "./data-list/data-list.component";


@NgModule({
  declarations: [
    DataListComponent,
  ],
  exports: [
    DataListComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class DataListModule { }
