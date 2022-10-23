import {Component, OnDestroy, OnInit} from "@angular/core";
import { ActivatedRoute, Data } from "@angular/router";
import { InventoryItem } from "../../services/inventory-data.service";
import {BehaviorSubject, map, Observable, Subscription, tap} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";

@Component({
    selector: "app-items-page",
    templateUrl: "./items-page.component.html",
    styleUrls: ["./items-page.component.scss"]
})
export class ItemsPageComponent {
    private inventoryItemsDataSource: MatTableDataSource<InventoryItem> = new MatTableDataSource<InventoryItem>([]);
    public inventoryItemsDataSource$: Observable<MatTableDataSource<InventoryItem>> = this.activatedRoute.data
      .pipe(
        map((data: Data) => data["inventoryItems"] as InventoryItem[]),
        map((items?: InventoryItem[]) => {
          this.inventoryItemsDataSource.data = items ?? [];
          return this.inventoryItemsDataSource;
        })
      )

    constructor(private activatedRoute: ActivatedRoute) {
    }
}

