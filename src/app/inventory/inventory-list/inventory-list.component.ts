import { Component } from "@angular/core";

export interface InventoryListData {
  id: string;
  name: string;
  code: string;
  description?: string;
  quantity?: number;
  unit?: number;
}

@Component({
  selector    : "app-inventory-list",
  templateUrl : "./inventory-list.component.html",
  styleUrls   : ["./inventory-list.component.scss"],
})
export class InventoryListComponent {
}
