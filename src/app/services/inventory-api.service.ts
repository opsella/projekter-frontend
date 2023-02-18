import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { Equipment } from "../models/equipment";
import { Material } from "../models/material";
import { editEquipment } from "../queries/equipment-mutations";
import { EquipmentFilters, getAllEquipment, getEquipmentById } from "../queries/equipment-queries";
import { Apollo } from "apollo-angular";
import { getAllMaterials, getMaterialById, MaterialsFilters } from "../queries/materials-queries";
import { InventoryFilters } from "../inventory/inventory-data.service";

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

  public queryEquipment(filters: EquipmentFilters): Observable<Equipment[]> {
    return getAllEquipment(this.apollo, filters);
  }

  public queryMaterials(filters: MaterialsFilters): Observable<Material[]> {
    return getAllMaterials(this.apollo, filters);
  }

  public getEquipmentById(equipmentId: InventoryFilters): Observable<Equipment> {
    return getEquipmentById(this.apollo, equipmentId);
  }

  public getMaterialById(materialId: InventoryFilters): Observable<Material> {
    console.log("GETTING MATERIAL DATA ");
    return getMaterialById(this.apollo, materialId).pipe(tap(v => console.log("WHAT THE", v)));
  }

  // public createEquipment(equipment: Equipment): void {
  //   createEquipment(this.apollo, equipment);
  // }
  //
  public editEquipment(equipment: Equipment) {
    return editEquipment(this.apollo, equipment);
  }
}
