import { Component, effect, inject, signal } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProjectService } from "../services/project.service";
import { HttpResourceRef } from "@angular/common/http";
import { CreateProjectRequest, Project } from "../../models/project";
import { toSignal } from "@angular/core/rxjs-interop";
import { ProjectStatusId } from "../../models/ids/project-status-id";

@Component({
  selector    : "app-project-details",
  templateUrl : "./project-details.component.html",
  styleUrl    : "./project-details.component.scss",
  standalone  : false,
})
export class ProjectDetailsComponent {
  private route = inject(ActivatedRoute);
  private params = toSignal(this.route.params, { initialValue: { id: "" } });
  private projectId = signal(this.params().id);

  public test: CreateProjectRequest = new CreateProjectRequest(
    "foo", new ProjectStatusId("status_9B75ECBC-5DA8-4821-B9DF-2EF5DE9597F5"), null, null);
  public test2 = JSON.stringify(this.test);

  protected project: HttpResourceRef<Project> = this.projectService.project(this.projectId);

  constructor(
    private router: Router,
    private projectService: ProjectService,
  ) {
    effect(() => {
      this.projectId.set(this.params().id);
    })
  }

  public async backToProjects(): Promise<void> {
    await this.router.navigate(["projects/list"]);
  }
}
