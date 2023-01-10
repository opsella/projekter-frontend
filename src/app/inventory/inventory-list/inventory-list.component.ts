import { Component } from "@angular/core";
import { MatLegacyTableDataSource as MatTableDataSource } from "@angular/material/legacy-table";
import { InventoryItem } from "../models/inventory-item";
import { map, Observable } from "rxjs";
import { ActivatedRoute, Data } from "@angular/router";

@Component({
  selector    : "app-inventory-list",
  templateUrl : "./inventory-list.component.html",
  styleUrls   : ["./inventory-list.component.scss"]
})
export class InventoryListComponent {
  private inventoryItemsDataSource: MatTableDataSource<InventoryItem> = new MatTableDataSource<InventoryItem>([]);
  public inventoryItemsDataSource$: Observable<MatTableDataSource<InventoryItem>> = this.activatedRoute.data
    .pipe(
      map((data: Data) => data["inventoryItems"] as InventoryItem[]),
      map((items?: InventoryItem[]) => {
        this.inventoryItemsDataSource.data = items ?? [];
        return this.inventoryItemsDataSource;
      })
    );

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }
}
