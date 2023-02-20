import { Component, OnInit } from "@angular/core";
import { InventoryListStore } from "./inventory-list.store";
import { Router } from "@angular/router";

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
  providers   : [InventoryListStore]
})
export class InventoryListComponent implements OnInit {
  public readonly vm$ = this.inventoryListStore.vm$;

  constructor(
    private readonly inventoryListStore: InventoryListStore,
    private router: Router
  ) {
  }

  public ngOnInit() {
    this.inventoryListStore.getInventoryTableData({ filters: {}, type: "equipment" });
  }
}
