import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ContentSectionComponent } from "../../shared/content-section/content-section.component";
import { ProjectDataListComponent } from "../project-data-list/project-data-list.component";

export interface ProjectTableData {
  id: string;
  name: string;
  code: string;
  description?: string;
}

@Component({
  selector: "app-dashboard-page",
  templateUrl: "./dashboard-page.component.html",
  styleUrls: ["./dashboard-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ContentSectionComponent,
    ProjectDataListComponent,
  ],
  standalone: true,
})
export class DashboardPageComponent {}
