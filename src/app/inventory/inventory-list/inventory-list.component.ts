import { Component } from "@angular/core";
import { PageWrapperComponent } from "../../shared/page-wrapper/page-wrapper.component";

export interface InventoryListData {
  id: string;
  name: string;
  code: string;
  description?: string;
  quantity?: number;
  unit?: number;
}

@Component({
  selector: "app-inventory-list",
  templateUrl: "./inventory-list.component.html",
  styleUrls: ["./inventory-list.component.scss"],
  imports: [PageWrapperComponent],
  standalone: true,
})
export class InventoryListComponent {}
