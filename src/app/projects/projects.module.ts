import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { SetupPageComponent } from './setup-page/setup-page.component';
import { ProjectsRoutingModule } from "./projects-routing.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {SharedModule} from "../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatStepperModule} from "@angular/material/stepper";
import {MatButtonModule} from "@angular/material/button";



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
        MatButtonModule
    ]
})
export class ProjectsModule { }
