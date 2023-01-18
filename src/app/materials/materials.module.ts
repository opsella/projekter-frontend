import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialsListComponent } from "./materials-list/materials-list.component";
import { SharedModule } from "../shared/shared.module";
import { MatTableModule } from "@angular/material/table";
import { MaterialsDetailsComponent } from "./materials-details/materials-details.component";
import { MaterialsRoutingModule } from "./materials-routing.module";
import { CoreModule } from "../core/core.module";
import { MaterialsEditComponent } from "./materials-edit/materials-edit.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    MaterialsListComponent,
    MaterialsDetailsComponent,
    MaterialsEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialsRoutingModule,
    MatTableModule,
    CoreModule,
    ReactiveFormsModule
  ]
})
export class MaterialsModule { }
