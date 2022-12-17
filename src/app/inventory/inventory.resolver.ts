import { Injectable } from "@angular/core";
import { Resolve, Router, } from "@angular/router";
import { Observable, tap } from "rxjs";
import { InventoryDataService } from "../services/inventory-data.service";
import { InventoryItem } from "./models/inventory-item";

@Injectable({
  providedIn: "root",
})
export class InventoryResolver implements Resolve<InventoryItem[]> {
  constructor(
    private inventoryData: InventoryDataService,
    private router: Router
  ) {}

  public resolve(): Observable<InventoryItem[]> {
    return this.inventoryData.query().pipe(
      tap(async (inventoryItem) => {
        if (inventoryItem.length === 0) {
          await this.router.navigate(["/inventory/setup"]);
        }
      })
    );
  }
}
