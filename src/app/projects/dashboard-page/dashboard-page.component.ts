import { ChangeDetectionStrategy, Component } from "@angular/core";
import { PageWrapperComponent } from "../../shared/page-wrapper/page-wrapper.component";
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
    PageWrapperComponent,
    ContentSectionComponent,
    ProjectDataListComponent,
  ],
  standalone: true,
})
export class DashboardPageComponent {}
