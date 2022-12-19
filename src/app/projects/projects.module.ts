import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardPageComponent } from "./dashboard-page/dashboard-page.component";
import { SetupPageComponent } from "./setup-page/setup-page.component";
import { ProjectsRoutingModule } from "./projects-routing.module";
import { MatLegacyFormFieldModule as MatFormFieldModule } from "@angular/material/legacy-form-field";
import { MatLegacySelectModule as MatSelectModule } from "@angular/material/legacy-select";
import { SharedModule } from "../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatStepperModule } from "@angular/material/stepper";
import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";
import { MatLegacyInputModule as MatInputModule } from "@angular/material/legacy-input";
import { MatLegacyTableModule as MatTableModule } from "@angular/material/legacy-table";
import { MatIconModule } from "@angular/material/icon";
import { DataListModule } from "../data-list/data-list.module";
import { ProjectDataListComponent } from "./project-data-list/project-data-list.component";


@NgModule({
  declarations: [
    DashboardPageComponent,
    SetupPageComponent,
    ProjectDataListComponent,
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    SharedModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
    DataListModule
  ]
})
export class ProjectsModule { }
