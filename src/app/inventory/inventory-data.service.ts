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

  public mutateInventoryMaterial(material: Material): Observable<MutationResult<{ registerMaterial: {tenantId: string; materialId: string; name: string}} | { updateMaterial: { id: string }}>> {
    if (material?.id) {
      return this.inventoryEditMaterial(material);
    } else {
      return this.inventoryCreateMaterial(material);
    }
  }

  public inventoryEditMaterial(material: Material): Observable<MutationResult<{ updateMaterial: { id: string }}>> {
    return this.inventoryApiService.editMaterial(material);
  }

  public inventoryCreateMaterial(material: Material): Observable<MutationResult<{ registerMaterial: {tenantId: string; materialId: string; name: string}}>> {
    return this.inventoryApiService.createMaterial(material);
  }

  public mutateInventoryEquipment(equipment: Equipment): Observable<MutationResult<{ registerEquipment: {tenantId: string; equipmentId: string; name: string}} | { updateEquipment: { id: string }}>> {
    if (equipment?.id) {
      return this.inventoryEditEquipment(equipment);
    } else {
      return this.inventoryCreateEquipment(equipment);
    }
  }

  public inventoryEditEquipment(equipment: Equipment): Observable<MutationResult<{ updateEquipment: { id: string }}>> {
    return this.inventoryApiService.editEquipment(equipment);
  }

  public inventoryCreateEquipment(equipment: Equipment): Observable<MutationResult<{ registerEquipment: {tenantId: string; equipmentId: string; name: string}}>> {
    return this.inventoryApiService.createEquipment(equipment);
  }

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
