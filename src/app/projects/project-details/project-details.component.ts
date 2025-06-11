import { Component, effect, inject, signal } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProjectService } from "../services/project.service";
import { HttpResourceRef } from "@angular/common/http";
import { Project } from "../../models/project";
import { toSignal } from "@angular/core/rxjs-interop";

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
