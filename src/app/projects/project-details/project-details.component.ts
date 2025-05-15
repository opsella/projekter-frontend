import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { combineLatest, Observable, of, switchMap, tap } from 'rxjs';
import { Project } from '../../models/project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss',
  standalone: false,
})
export class ProjectDetailsComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectService,
  ) {}

  ngOnInit() {
    combineLatest([this.activatedRoute.params, this.activatedRoute.queryParams])
      .pipe(
        switchMap(([params1, params2]: [Params, Params]): any => {
          let projectDetails$: Observable<null | Project[]> = of(null);

          if (!params2['new']) {
            projectDetails$ = this.projectService.getProjectById<Project[]>(
              Number(params1['id']),
            );
          }

          return projectDetails$;
        }),
        tap((result) => {
          console.log('RESULT', result);
          // if project results, populate readonly form
          // else make form not readonly with only the name populated
        }),
      )
      .subscribe();
  }

  public async backToProjects(): Promise<void> {
    await this.router.navigate(['projects/list']);
  }
}
