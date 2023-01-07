import { Injectable } from "@angular/core";
import { Resolve, Router, } from "@angular/router";
import { Observable } from "rxjs";
import { InventoryApiService } from "../services/inventory-api.service";
import { InventoryItem } from "./models/inventory-item";

@Injectable({
  providedIn: "root",
})
export class InventoryResolver implements Resolve<InventoryItem[]> {
  constructor(
    private inventoryData: InventoryApiService,
    private router: Router
  ) { }

  public resolve(): Observable<InventoryItem[]> {
    return this.inventoryData.query();
  }
}
