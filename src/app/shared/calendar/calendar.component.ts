import { Component, Input } from '@angular/core';
import {
  EventSettingsModel,
  ScheduleModule,
} from '@syncfusion/ej2-angular-schedule';
import { Project } from '../../models/project';

@Component({
  selector: 'app-calendar',
  imports: [ScheduleModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent {
  private formattedProjects: any[];

  @Input() set calendarEvents(projects: Project[]) {
    this.formattedProjects = projects.map((project: Project): any => {
      return {
        Id: project.id,
        Subject: project.name,
        Description: project.description,
        StartTime: project.start_timestamp,
        EndTime: project.end_timestamp,
      };
    });
  }

  public get projects(): EventSettingsModel {
    return { dataSource: this.formattedProjects };
  }

  public data: object[] = [
    {
      Id: 1,
      Subject: 'Project Name',
      StartTime: new Date(2023, 1, 15, 10, 0),
      EndTime: new Date(2023, 1, 18, 12, 30),
    },
  ];
  public selectedDate: Date = new Date();
}
