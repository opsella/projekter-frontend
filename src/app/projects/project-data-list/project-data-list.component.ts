import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../services/project.service';
import { map, Observable } from 'rxjs';
import { ExpansionTableData } from '../../shared/expansion-table/expandable-data';
import { ProjectTableContentComponent } from '../project-table-content/project-table-content.component';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector        : "app-project-data-list",
  templateUrl     : "./project-data-list.component.html",
  styleUrls       : ["./project-data-list.component.scss"],
  changeDetection : ChangeDetectionStrategy.OnPush,
  standalone      : false
})
export class ProjectDataListComponent {
  public projects$: Observable<ExpansionTableData<Project>[]>;
  public projects = Array.from({length: 30}, (x, i) => ({
    id            : i,
    title         : "Oliver Fence In The Old Western",
    status        : "Draft",
    allocatedTime : "200h",
    totalTime     : "200h",
    photo         : "https://www.wjhl.com/wp-content/uploads/sites/98/2023/02/vlcsnap-2023-02-22-18h30m52s817.jpg?strip=1"
  }));

  public projectCreationForm = new FormGroup({
    projectName : new FormControl("", [Validators.required]),
    image       : new FormControl(""),
  });

  protected openModal = false;

  constructor(
    private projectService: ProjectService,
    private router: Router,
  ) {
    this.projects$ = this.projectService.getProjects<Project[]>().pipe(
      map((projects: Project[]): ExpansionTableData<Project>[] => {
        return projects.map((project: Project): ExpansionTableData<Project> => {
          return {
            data: {
              ...project,
            },
            actions: [
              {
                title   : "Details",
                enabled : () => true,
                visible : () => true,
                action  : async (): Promise<any> => {},
              },
              {
                title   : "Edit",
                enabled : () => true,
                visible : () => true,
                action  : async (): Promise<any> => {},
              },
            ],
            expansionComponent: ProjectTableContentComponent,
          };
        });
      }),
    );
  }

  public async viewDetails(id: number): Promise<void> {
    await this.router.navigate([
      "project/details", id
    ]);
  }

  public createProject() {
    this.openModal = true;
  }

  public onSubmit() {
    const project = {
      name: this.projectCreationForm.get("projectName").value,
    };

    this.projectService.createProject<Project>(project).subscribe({
      next: async (project: Project): Promise<void> => {
        await this.router.navigate([
          "project/details", project.id
        ], {
          queryParams: { new: true },
        });
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.openModal = false;
  }
}
