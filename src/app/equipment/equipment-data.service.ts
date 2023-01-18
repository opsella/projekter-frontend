import { Injectable } from "@angular/core";
import { Equipment } from "./models/equipment";
import { Observable } from "rxjs";
import { EquipmentFilters, InventoryApiService } from "../services/inventory-api.service";

@Injectable({
  providedIn: "root"
})
export class EquipmentDataService {
  constructor(private inventoryApiService: InventoryApiService) {}

  public getEquipmentData(filters: EquipmentFilters): Observable<Equipment[]> {
    return this.inventoryApiService.queryEquipment(filters);
  }

  public createEquipment() {

  }

  public editEquipment() {

  }
}
