import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "@auth0/auth0-angular";

const routes: Routes = [
  {
    path         : "auth",
    loadChildren : () => import("./authentication/authentication.module").then((m) => m.AuthenticationModule),
  },
  {
    path         : "registration",
    loadChildren : () => import("./registration/registration.module").then(m => m.RegistrationModule)
  },
  {
    path         : "project",
    loadChildren : () => import("./projects/projects.module").then(m => m.ProjectsModule),
    canActivate  : [AuthGuard]
  },
  {
    path         : "inventory",
    loadChildren : () => import("./inventory/inventory.module").then(m => m.InventoryModule),
    canActivate  : [AuthGuard],
  },
  {
    path         : "team",
    loadChildren : () => import("./team/team.module").then(m => m.TeamModule),
    canActivate  : [AuthGuard],
  },
  {
    path         : "template",
    loadChildren : () => import("./templates/templates.module").then(m => m.TemplatesModule),
    canActivate  : [AuthGuard],
  },
  {
    path         : "customer",
    loadChildren : () => import("./customers/customers.module").then(m => m.CustomersModule),
    canActivate  : [AuthGuard],
  },
  {
    path         : "user",
    loadChildren : () => import("./user/user.module").then(m => m.UserModule),
    canActivate  : [AuthGuard],
  },
  {
    path         : "settings",
    loadChildren : () => import("./settings/settings.module").then(m => m.SettingsModule),
    canActivate  : [AuthGuard],
  },
  {
    path       : "**",
    redirectTo : "/project",
  }
];

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule],
})
export class AppRoutingModule {}
