import { Injectable } from "@angular/core";
import { InventoryApiService } from "../services/inventory-api.service";
import { Observable, tap } from "rxjs";
import { EquipmentFilters } from "../queries/equipment-queries";
import { InventoryTypes, SupportedInventory } from "./inventory-list/inventory-list.store";
import { MaterialsFilters } from "../queries/materials-queries";
import { Equipment } from "../models/equipment";
import { Material } from "../models/material";
import { MutationResult } from "apollo-angular";
import { UnreachableException } from "../shared/exceptions/unreachable-exception";

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

  public inventoryEditEquipment(equipment: Equipment): Observable<MutationResult<{ updateEquipment: { id: string }}>> {
    return this.inventoryApiService.editEquipment(equipment);
  }

  // public inventoryCreate(type: InventoryTypes) {
  //   switch (type) {
  //   case this.SUPPORTED_INVENTORY_TYPES.equipment:
  //     return this.inventoryApiService.createEquipment(filters);
  //   default:
  //     break;
  //   }
  // }

  public inventoryDetailsQuery(id: InventoryFilters, type: InventoryTypes): Observable<Equipment | Material> {
    switch (type) {
    case this.SUPPORTED_INVENTORY_TYPES.equipment:
      return this.inventoryApiService.getEquipmentById(id);
    case this.SUPPORTED_INVENTORY_TYPES.materials:
      return this.inventoryApiService.getMaterialById(id).pipe(tap(v => console.log("Inventory Details Query", v)));
    default:
      throw new UnreachableException("This should not be reached");
    }
  }
}

export type InventoryFilters = EquipmentFilters | MaterialsFilters;
