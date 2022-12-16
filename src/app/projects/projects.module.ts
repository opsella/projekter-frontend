import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { SetupPageComponent } from './setup-page/setup-page.component';
import { ProjectsRoutingModule } from "./projects-routing.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {SharedModule} from "../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatStepperModule} from "@angular/material/stepper";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    DashboardPageComponent,
    SetupPageComponent
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
        MatIconModule
    ]
})
export class ProjectsModule { }
