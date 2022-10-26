import { RouterModule, Routes } from "@angular/router";
import { InventoryResolver } from "./inventory.resolver";
import { ItemsPageComponent } from "./items-page/items-page.component";
import { SetupPageComponent } from "./setup-page/setup-page.component";
import { NgModule } from "@angular/core";
import { SuppliesCreationPageComponent } from "./supplies-creation-page/supplies-creation-page.component";
import { EquipmentCreationPageComponent } from "./equipment-creation-page/equipment-creation-page.component";

const routes: Routes = [
    {
        path: "list",
        resolve: {
            inventoryItems: InventoryResolver,
        },
        component: ItemsPageComponent,
    },
    {
        path: "setup",
        component: SetupPageComponent,
    },
    {
        path: "create/supplies",
        component: SuppliesCreationPageComponent,
    },
    {
        path: "create/equipment",
        component: EquipmentCreationPageComponent,
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
