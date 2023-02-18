import { Injectable } from "@angular/core";
import { InventoryApiService } from "../services/inventory-api.service";
import { Observable } from "rxjs";
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

  // public inventoryEdit(type: InventoryTypes, item: Equipment | Material) {
  //   switch (type) {
  //   case this.SUPPORTED_INVENTORY_TYPES.equipment:
  //     return this.inventoryApiService.editEquipment(item);
  //   default:
  //     break;
  //   }
  // }

  // public inventoryCreate(type: InventoryTypes) {
  //   switch (type) {
  //   case this.SUPPORTED_INVENTORY_TYPES.equipment:
  //     return this.inventoryApiService.createEquipment(filters);
  //   default:
  //     break;
  //   }
  // }

  // @ts-ignore
  public inventoryDetailsQuery(id: InventoryFilters, type: InventoryTypes): Observable<Equipment | Material> {
    switch (type) {
    case this.SUPPORTED_INVENTORY_TYPES.equipment:
      return this.inventoryApiService.getEquipmentById(id);
    case this.SUPPORTED_INVENTORY_TYPES.materials:
      return this.inventoryApiService.getMaterialById(id);
    default:
      break;
    }
  }
}

export type InventoryFilters = EquipmentFilters | MaterialsFilters;
