import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../services/project.service';
import { map, Observable } from 'rxjs';
import { ExpansionTableData } from '../../shared/expansion-table/expandable-data';
import { ProjectTableContentComponent } from '../project-table-content/project-table-content.component';

@Component({
    selector: "app-project-data-list",
    templateUrl: "./project-data-list.component.html",
    styleUrls: ["./project-data-list.component.scss"],
    standalone: false,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectDataListComponent {
  public projects$: Observable<ExpansionTableData<Project>[]>;

  constructor(
    private projectService: ProjectService,
  ) {
    this.projects$ = this.projectService.getProjects<Project[]>()
      .pipe(
        map((projects: Project[]): ExpansionTableData<Project>[] => {
           return projects.map((project: Project): ExpansionTableData<Project> => {
              return {
                data: {
                  ...project
                },
                actions: [
                  {
                    title: "Details",
                    enabled: () => true,
                    visible: () => true,
                    action: async (): Promise<any> => {}
                  },
                  {
                    title: "Edit",
                    enabled: () => true,
                    visible: () => true,
                    action: async (): Promise<any> => {}
                  }
                ],
                expansionComponent: ProjectTableContentComponent
              }
          })
    }));
  }
}
