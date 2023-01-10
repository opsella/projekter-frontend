import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EquipmentListComponent } from "./equipment-list/equipment-list.component";
import { EquipmentDetailsComponent } from "./equipment-details/equipment-details.component";

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
    path       : "**",
    redirectTo : "/equipment/list",
  },
];

@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule],
})
export class EquipmentRoutingModule { }
