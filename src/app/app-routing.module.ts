import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// import { TeamLandingComponent } from './team/team-landing/team-landing.component';
// import { EmployeeTrainingComponent } from './team/employee-training/employee-training.component';
// import { EmployeeTrainingsListComponent } from './team/employee-trainings-list/employee-trainings-list.component';
// import { TeamTrainingWrapperComponent } from './team/team-training-wrapper/team-training-wrapper.component';

const routes: Routes = [
    {
        path: "inventory",
        loadChildren: () => import("./inventory/inventory.module").then(m => m.InventoryModule)
    }
    // {
    //   path: 'team',
    //   component: TeamLandingComponent,
    //   children: [
    //     {
    //       path: 'training',
    //       component: TeamTrainingWrapperComponent,
    //       children: [
    //         {
    //           path: 'employee',
    //           component: EmployeeTrainingComponent,
    //         },
    //         {
    //           path: 'list',
    //           component: EmployeeTrainingsListComponent,
    //         },
    //         {
    //           path: '**',
    //           redirectTo: 'employee',
    //         },
    //       ],
    //     },
    //     {
    //       path: '**',
    //       component: TeamLandingComponent,
    //     },
    //   ],
    // },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
