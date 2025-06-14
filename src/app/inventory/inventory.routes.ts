import { Routes } from "@angular/router";
import { InventoryListComponent } from "./inventory-list/inventory-list.component";
import { InventoryDetailsComponent } from "./inventory-details/inventory-details.component";
import { InventoryEditComponent } from "./inventory-edit/inventory-edit.component";
import { EquipmentEditFormComponent } from "./equipment/equipment-edit-form/equipment-edit-form.component";
import { MaterialEditFormComponent } from "./materials/material-edit-form/material-edit-form.component";

export const inventoryRoutes: Routes = [
  {
    path: "list",
    component: InventoryListComponent,
  },
  {
    path: "details/:code",
    component: InventoryDetailsComponent,
  },
  {
    path: "edit/:code",
    component: InventoryEditComponent,
  },
  {
    path: "create",
    component: InventoryEditComponent,
    children: [
      {
        path: "",
        redirectTo: "equipment",
        pathMatch: "full",
      },
      {
        path: "equipment",
        component: EquipmentEditFormComponent,
      },
      {
        path: "material",
        component: MaterialEditFormComponent,
      },
    ],
  },
  {
    path: "**",
    redirectTo: "/inventory/list",
  },
];
