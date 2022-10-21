import { RouterModule, Routes } from "@angular/router";
import { InventoryResolver } from "./inventory.resolver";
import { InventoryListPageComponent } from "./inventory-list-page/inventory-list-page.component";
import { InventorySetupPageComponent } from "./inventory-setup-page/inventory-setup-page.component";
import { NgModule } from "@angular/core";
import { InventorySuppliesCreationComponent } from "./inventory-supplies-creation/inventory-supplies-creation.component";
import {
    InventoryEquipmentCreationComponent
} from "./inventory-equipment-creation/inventory-equipment-creation.component";

const routes: Routes = [
    {
        path: "list",
        resolve: {
            inventoryItems: InventoryResolver,
        },
        component: InventoryListPageComponent,
    },
    {
        path: "setup",
        component: InventorySetupPageComponent,
    },
    {
        path: "create/supplies",
        component: InventorySuppliesCreationComponent,
    },
    {
        path: "create/equipment",
        component: InventoryEquipmentCreationComponent,
    },
    {
        path: "**",
        redirectTo: "/inventory/list",
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class InventoryRoutingModule {}
