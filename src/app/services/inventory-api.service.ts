import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Equipment } from "../models/equipment";
import { Material } from "../models/material";
import { EquipmentFilters, getAllEquipment, getEquipmentById } from "../queries/equipment-queries";
import { Apollo } from "apollo-angular";
import { createEquipment, editEquipment } from "../queries/equipment-mutations";
import { getInventoryItemById } from "../queries/inventory-queries";
import { getAllMaterials, MaterialsFilters } from "../queries/materials-queries";
import { getInventoryDetailsById } from "../queries/inventory-details";

export interface EquipmentResponse {
  id: string;
  name: string;
  code: string;
  description: string;
}

export interface MaterialsResponse {
  id: string;
  name: string;
  code: string;
  quantity: number;
  unit: number;
  description: string;
}

export type InventoryItem = Equipment | Material;

@Injectable({
  providedIn: "root",
})
export class InventoryApiService {

  constructor(private apollo: Apollo) {
  }

  public getInventoryItemById(itemId: string): Observable<InventoryItem> {
    return getInventoryItemById(this.apollo, itemId);
  }

  public getInventoryDetailsById(inventoryId: string): Observable<InventoryItem> {
    // This might return something different than 'InventoryItem'. If we build out all
    // the data that we want in the endpoint, we can build interfaces to match those.
    // Ideally, this would return everything needed for a details page in some digestable
    // format. We can discuss this more.
    return getInventoryDetailsById(this.apollo, inventoryId);
  }

  public queryEquipment(filters: EquipmentFilters): Observable<Equipment[]> {
    return getAllEquipment(this.apollo, filters);
  }

  public queryMaterials(filters: MaterialsFilters): Observable<Material[]> {
    return getAllMaterials(this.apollo, filters);
  }

  public getEquipmentById(equipmentId: string): Observable<Equipment> {
    return getEquipmentById(this.apollo, equipmentId);
  }

  public createEquipment(equipment: Equipment): void {
    createEquipment(this.apollo, equipment);
  }

  public async editEquipment(equipment: Equipment) {
    editEquipment(this.apollo, equipment);
  }
}
