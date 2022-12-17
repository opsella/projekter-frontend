import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { SettingsComponent } from "./settings/settings.component";
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
    {
        path: "profile",
        component: ProfileComponent,
    },
    {
        path: "settings",
        component: SettingsComponent,
    },
    {
        path: "**",
        redirectTo: "/user/profile",
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UserRoutingModule {}
