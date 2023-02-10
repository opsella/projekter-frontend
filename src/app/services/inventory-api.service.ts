import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Equipment } from "../equipment/models/equipment";
import { Material } from "../materials/models/material";
import { EquipmentFilters, getAllEquipment, getEquipmentById } from "../queries/equipment-queries";
import { Apollo } from "apollo-angular";
import { createEquipment, editEquipment } from "../queries/equipment-mutations";
import { InventoryItem } from "../state/all-inventory/all-inventory.actions";
import { getInventoryItemById } from "../queries/inventory-queries";
import { getAllMaterials, MaterialsFilters } from "../queries/materials-queries";

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

@Injectable({
  providedIn: "root",
})
export class InventoryApiService {

  constructor(private apollo: Apollo) {
  }

  public getInventoryItemById(itemId: string): Observable<InventoryItem> {
    return getInventoryItemById(this.apollo, itemId);
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
