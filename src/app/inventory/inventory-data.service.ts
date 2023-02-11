import { Injectable } from "@angular/core";
import { InventoryApiService } from "../services/inventory-api.service";
import { Observable } from "rxjs";
import { InventoryItem } from "../state/all-inventory/all-inventory.actions";
import { EquipmentFilters } from "../queries/equipment-queries";
import { InventoryTypes, SupportedInventory } from "./inventory-list/inventory-list.store";
import { MaterialsFilters } from "../queries/materials-queries";
import { Equipment } from "../models/equipment";
import { Material } from "../models/material";

@Injectable({
  providedIn: "root"
})
export class InventoryDataService {
  constructor(
    private inventoryApiService: InventoryApiService
  ) {
  }

  private readonly SUPPORTED_INVENTORY_TYPES = {
    equipment : "equipment",
    materials : "materials"
  };

  public inventoryTableQuery(filters: InventoryFilters, type: InventoryTypes): Observable<SupportedInventory> {
    switch (type) {
    case this.SUPPORTED_INVENTORY_TYPES.equipment:
      return this.inventoryApiService.queryEquipment(filters);
    case this.SUPPORTED_INVENTORY_TYPES.materials:
      return this.inventoryApiService.queryMaterials(filters);
    default:
      return this.inventoryApiService.queryEquipment(filters);
    }
  }

  public inventoryDetailsQuery(inventoryId: string): Observable<Equipment | Material> {
    return this.inventoryApiService.getInventoryDetailsById(inventoryId);
  }

  public getInventoryItemById(itemId: string): Observable<InventoryItem> {
    return this.inventoryApiService.getInventoryItemById(itemId);
  }
}

export type InventoryFilters = EquipmentFilters | MaterialsFilters;
