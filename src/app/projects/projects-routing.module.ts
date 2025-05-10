import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { AuthGuard } from '@auth0/auth0-angular';


const routes: Routes = [
  {
    path        : "list",
    component   : DashboardPageComponent,
    canActivate : [
      AuthGuard
    ]
  },
  {
    path       : "**",
    redirectTo : "/project/list",
  },
];

@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule],
})
export class ProjectsRoutingModule {}
