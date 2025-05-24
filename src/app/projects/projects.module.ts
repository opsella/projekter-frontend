import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { DataListModule } from '../data-list/data-list.module';
import { ProjectDataListComponent } from './project-data-list/project-data-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { ProjectTableContentComponent } from './project-table-content/project-table-content.component';
import { ProjectService } from './services/project.service';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { GanttChartComponent } from '../shared/gantt-chart/gantt-chart.component';
import { CalendarComponent } from '../shared/calendar/calendar.component';
import {
  MatButtonToggle,
  MatButtonToggleGroup,
} from '@angular/material/button-toggle';
import { ToggleButtonComponent } from '../shared/toggle-button/toggle-button.component';

@NgModule({
  declarations: [
    DashboardPageComponent,
    ProjectDataListComponent,
    ProjectTableContentComponent,
    ProjectDetailsComponent,
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
    DataListModule,
    GanttChartComponent,
    CalendarComponent,
    MatButtonToggleGroup,
    MatButtonToggle,
    ToggleButtonComponent,
  ],
  providers: [ProjectService],
})
export class ProjectsModule {}
