import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { InventoryListComponent } from "./inventory-list/inventory-list.component";
import { InventoryDetailsComponent } from "./inventory-details/inventory-details.component";
import { InventoryEditComponent } from "./inventory-edit/inventory-edit.component";
import { EquipmentEditFormComponent } from "./equipment/equipment-edit-form/equipment-edit-form.component";
import { MaterialEditFormComponent } from "./materials/material-edit-form/material-edit-form.component";

const routes: Routes = [
  {
    path      : "list",
    component : InventoryListComponent,
    data      : {
      title: "Inventory"
    }
  },
  {
    path      : "details/:code",
    component : InventoryDetailsComponent,
    data      : {
      title: ""
    }
  },
  {
    path      : "edit/:code",
    component : InventoryEditComponent,
    data      : {
      title: ""
    }
  },
  {
    path      : "create",
    component : InventoryEditComponent,
    children  : [
      {
        path       : "",
        redirectTo : "equipment",
        pathMatch  : "full"
      },
      {
        path      : "equipment",
        component : EquipmentEditFormComponent
      },
      {
        path      : "material",
        component : MaterialEditFormComponent
      }
    ],
  },
  {
    path       : "**",
    redirectTo : "/inventory/list",
  },
];

@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule],
})
export class InventoryRoutingModule {}
