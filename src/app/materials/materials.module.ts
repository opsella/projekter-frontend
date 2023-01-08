import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialsListComponent } from "./materials-list/materials-list.component";
import { SharedModule } from "../shared/shared.module";
import { MatTableModule } from "@angular/material/table";

@NgModule({
  declarations: [
    MaterialsListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule
  ]
})
export class MaterialsModule { }
