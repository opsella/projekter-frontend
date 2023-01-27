import { Injectable } from "@angular/core";
import { Equipment } from "./models/equipment";
import { Observable } from "rxjs";
import { InventoryApiService } from "../services/inventory-api.service";
import { EquipmentFilters } from "../queries/equipment-queries";

@Injectable({
  providedIn: "root"
})
export class EquipmentDataService {
  constructor(private inventoryApiService: InventoryApiService) {}

  public getEquipmentData(filters: EquipmentFilters): Observable<Equipment[]> {
    return this.inventoryApiService.queryEquipment(filters);
  }

  public getEquipmentById(equipmentId: string) {
    try {
      return this.inventoryApiService.getEquipmentById(equipmentId);
    } catch (e) {
      throw new Error(`Issue retrieving equipment by ID: ${e}`);
    }
  }

  public async createEquipment(equipment: Equipment): Promise<void> {
    try {
      await this.inventoryApiService.createEquipment(equipment);
    } catch (e) {
      throw new Error(`Issue creating new equipment: ${e}`);
    }
  }

  public async editEquipment(equipment: Equipment): Promise<void> {
    try {
      await this.inventoryApiService.editEquipment(equipment);
    } catch (e) {
      throw new Error(`Issue updating equipment: ${e}`);
    }
  }
}
