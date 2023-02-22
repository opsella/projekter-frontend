import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Equipment } from "../models/equipment";
import { Material } from "../models/material";
import { createEquipment, editEquipment } from "../queries/equipment-mutations";
import { createMaterial, editMaterial } from "../queries/materials-mutations";
import { EquipmentFilters, getAllEquipment, getEquipmentById } from "../queries/equipment-queries";
import { Apollo } from "apollo-angular";
import { getAllMaterials, getMaterialById, MaterialsFilters } from "../queries/materials-queries";
import { InventoryFilters } from "../inventory/inventory-data.service";
import { Contacts } from "../models/contacts";

export interface EquipmentResponse {
  id: string;
  name: string;
  code: string;
  description: string;
}

export interface CustomerResponse {
  id: string;
  code: string;
  name: string;
  status: string;
  category: string;
  location: string;
  locationDescription: string;
  summary: string;
  description: string;
  contacts: Contacts[];
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
    return getMaterialById(this.apollo, materialId);
  }

  public createEquipment(equipment: Equipment) {
    return createEquipment(this.apollo, equipment);
  }

  public editEquipment(equipment: Equipment) {
    return editEquipment(this.apollo, equipment);
  }

  public createMaterial(material: Material) {
    return createMaterial(this.apollo, material);
  }

  public editMaterial(material: Material) {
    return editMaterial(this.apollo, material);
  }
}
