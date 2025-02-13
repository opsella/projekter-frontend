import { Component } from "@angular/core";
import { InventoryDataService } from "../../inventory/inventory-data.service";

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
    standalone: false
})
export class DashboardPageComponent {

  constructor(
    private inventoryDataService: InventoryDataService,
  ) {
  }

}
