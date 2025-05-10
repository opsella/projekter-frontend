import { ChangeDetectionStrategy, Component } from '@angular/core';

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
    standalone: false,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPageComponent {

}
