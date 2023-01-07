import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EquipmentListComponent } from "./equipment-list/equipment-list.component";
import { EquipmentRoutingModule } from "./equipment-routing.module";
import { SharedModule } from "../shared/shared.module";
import { MatTableModule } from "@angular/material/table";
import { EquipmentDetailsComponent } from "./equipment-details/equipment-details.component";

@NgModule({
  declarations: [
    EquipmentListComponent,
    EquipmentDetailsComponent
  ],
  imports: [
    CommonModule,
    EquipmentRoutingModule,
    SharedModule,
    MatTableModule
  ]
})
export class EquipmentModule { }
