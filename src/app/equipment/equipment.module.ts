import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EquipmentListComponent } from "./equipment-list/equipment-list.component";
import { EquipmentRoutingModule } from "./equipment-routing.module";
import { SharedModule } from "../shared/shared.module";
import { MatTableModule } from "@angular/material/table";

@NgModule({
  declarations: [
    EquipmentListComponent
  ],
  imports: [
    CommonModule,
    EquipmentRoutingModule,
    SharedModule,
    MatTableModule
  ]
})
export class EquipmentModule { }
