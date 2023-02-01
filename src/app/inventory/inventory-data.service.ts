import { Injectable } from "@angular/core";
import { InventoryApiService } from "../services/inventory-api.service";
import { Observable } from "rxjs";
import { Equipment } from "../equipment/models/equipment";
import { Material } from "../materials/models/material";

@Injectable({
  providedIn: "root"
})
export class InventoryDataService {
  constructor(
    private inventoryApiService: InventoryApiService
  ) {
  }

  public async inventoryTableQuery(dataType: string): Promise<Observable<Equipment[] | Material[]>> {
    switch (dataType) {
    case "Equipment":
      return this.inventoryApiService.queryEquipment({});
    case "Materials":
      return this.inventoryApiService.queryMaterials({});
    default:
      return this.inventoryApiService.queryEquipment({});
    }
  }

  public async getExpansionDetails(id: string | undefined, dataType: string | undefined) {
    if (dataType === "Equipment") {
      // return this.inventoryApiService.queryEquipmentExpansionDetails({});
    } else if (dataType === "Materials") {
      // return this.inventoryApiService.queryMaterialsExpansionDetails({});
    }
  }
}
