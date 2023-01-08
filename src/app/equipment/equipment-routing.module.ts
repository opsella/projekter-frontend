import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EquipmentListComponent } from "./equipment-list/equipment-list.component";
import { EquipmentDetailsComponent } from "./equipment-details/equipment-details.component";
import { EquipmentEditComponent } from "./equipment-edit/equipment-edit.component";

const routes: Routes = [
  {
    path      : "list",
    component : EquipmentListComponent,
  },
  {
    path      : "details/:name",
    component : EquipmentDetailsComponent
  },
  {
    path      : "edit/:name",
    component : EquipmentEditComponent
  },
  {
    path       : "**",
    redirectTo : "/equipment/list",
  },
];

@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule],
})
export class EquipmentRoutingModule { }
