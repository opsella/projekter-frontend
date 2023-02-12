import { Component, OnInit } from "@angular/core";
import { InventoryDataService } from "../../inventory/inventory-data.service";
import { ProjectsDashboardStore } from "./projects-dashboard.store";

export interface ProjectTableData {
  id: string;
  name: string;
  code: string;
  description?: string;
}

@Component({
  selector    : "app-dashboard-page",
  templateUrl : "./dashboard-page.component.html",
  styleUrls   : ["./dashboard-page.component.scss"],
  providers   : [ProjectsDashboardStore]
})
export class DashboardPageComponent implements OnInit {
  public readonly vm$ = this.projectsDashboardStore.vm$;

  constructor(
    private inventoryDataService: InventoryDataService,
    private readonly projectsDashboardStore: ProjectsDashboardStore
  ) {
  }

  public ngOnInit() {
    this.projectsDashboardStore.getProjectsTableData({ filters: {} });
  }
}
