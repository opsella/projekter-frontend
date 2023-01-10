import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardPageComponent } from "./dashboard-page/dashboard-page.component";


const routes: Routes = [
  {
    path      : "list",
    component : DashboardPageComponent,
  },
  {
    path       : "**",
    redirectTo : "/projects/list",
  },
];

@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule],
})
export class ProjectsRoutingModule {}
