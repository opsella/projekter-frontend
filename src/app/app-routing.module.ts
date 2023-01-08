import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path         : "equipment",
    loadChildren : () => import("./equipment/equipment.module").then(m => m.EquipmentModule)
  },
  {
    path         : "inventory",
    loadChildren : () => import("./inventory/inventory.module").then(m => m.InventoryModule)
  },
  {
    path         : "materials",
    loadChildren : () => import("./materials/materials.module").then(m => m.MaterialsModule)
  },
  {
    path         : "projects",
    loadChildren : () => import("./projects/projects.module").then(m => m.ProjectsModule)
  },
  {
    path         : "user",
    loadChildren : () => import("./user/user.module").then(m => m.UserModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {}
