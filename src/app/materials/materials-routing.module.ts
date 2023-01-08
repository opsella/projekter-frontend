import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MaterialsListComponent } from "./materials-list/materials-list.component";

const routes: Routes = [
  {
    path      : "list",
    component : MaterialsListComponent,
  },
  {
    path       : "**",
    redirectTo : "/materials/list",
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class MaterialsRoutingModule { }
