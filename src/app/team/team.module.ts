import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TeamLandingComponent } from "./team-landing/team-landing.component";
import { EmployeeTrainingComponent } from "./employee-training/employee-training.component";
import { EmployeeTrainingsListComponent } from "./employee-trainings-list/employee-trainings-list.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { RouterModule } from "@angular/router";
import { MatInputModule } from "@angular/material/input";

@NgModule({
    declarations: [
        TeamLandingComponent,
        EmployeeTrainingComponent,
        EmployeeTrainingsListComponent,
    ],
    imports: [CommonModule, MatExpansionModule, RouterModule, MatInputModule],
})
export class TeamModule {}
