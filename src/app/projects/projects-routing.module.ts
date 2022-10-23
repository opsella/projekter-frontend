import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProjectsResolver } from "./projects.resolver";
import { DashboardPageComponent } from "./dashboard-page/dashboard-page.component";
import { SetupPageComponent } from "./setup-page/setup-page.component";


const routes: Routes = [
    {
        path: "list",
        resolve: {
            projectsData: ProjectsResolver,
        },
        component: DashboardPageComponent,
    },
    {
        path: "setup",
        component: SetupPageComponent,
    },
    {
        path: "**",
        redirectTo: "/projects/list",
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProjectsRoutingModule {}
