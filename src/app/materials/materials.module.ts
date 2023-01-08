import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialsListComponent } from "./materials-list/materials-list.component";
import { SharedModule } from "../shared/shared.module";
import { MatTableModule } from "@angular/material/table";
import { MaterialsDetailsComponent } from "./materials-details/materials-details.component";
import { MaterialsRoutingModule } from "./materials-routing.module";

@NgModule({
  declarations: [
    MaterialsListComponent,
    MaterialsDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialsRoutingModule,
    MatTableModule
  ]
})
export class MaterialsModule { }
