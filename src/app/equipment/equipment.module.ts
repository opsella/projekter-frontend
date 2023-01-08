import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EquipmentListComponent } from "./equipment-list/equipment-list.component";
import { EquipmentRoutingModule } from "./equipment-routing.module";
import { SharedModule } from "../shared/shared.module";
import { MatTableModule } from "@angular/material/table";
import { EquipmentDetailsComponent } from "./equipment-details/equipment-details.component";
import { EquipmentEditComponent } from "./equipment-edit/equipment-edit.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    EquipmentListComponent,
    EquipmentDetailsComponent,
    EquipmentEditComponent
  ],
  imports: [
    CommonModule,
    EquipmentRoutingModule,
    SharedModule,
    MatTableModule,
    ReactiveFormsModule
  ]
})
export class EquipmentModule { }
