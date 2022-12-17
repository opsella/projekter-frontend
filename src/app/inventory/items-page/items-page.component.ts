import { Component } from "@angular/core";
import { ActivatedRoute, Data } from "@angular/router";
import { map, Observable } from "rxjs";
import { MatLegacyTableDataSource as MatTableDataSource } from "@angular/material/legacy-table";
import { InventoryItem } from "../models/inventory-item";

@Component({
  selector    : "app-items-page",
  templateUrl : "./items-page.component.html",
  styleUrls   : [
    "./items-page.component.scss"
  ]
})
export class ItemsPageComponent {
  private inventoryItemsDataSource: MatTableDataSource<InventoryItem> = new MatTableDataSource<InventoryItem>([
  ]);
  public inventoryItemsDataSource$: Observable<MatTableDataSource<InventoryItem>> = this.activatedRoute.data
    .pipe(
      map((data: Data) => data["inventoryItems"] as InventoryItem[]),
      map((items?: InventoryItem[]) => {
        this.inventoryItemsDataSource.data = items ?? [
        ];
        return this.inventoryItemsDataSource;
      })
    );

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }
}

