import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { AuthGuard } from "@auth0/auth0-angular";
import { claimGuardGuard } from "../authentication/claim-guard.guard";

const routes: Routes = [
  {
    path        : "register",
    component   : RegisterComponent,
    canActivate : [
      AuthGuard,
      claimGuardGuard([
        "tenant:write",
        "user:write",
      ])
    ]
  },
  {
    path       : "**",
    redirectTo : "/registration/register"
  }
];

@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule]
})
export class RegistrationRoutingModule {
}
