import { Injectable } from "@angular/core";
import { InventoryApiService, MaterialsFilters } from "../services/inventory-api.service";
import { Observable } from "rxjs";
import { Material } from "./models/material";

@Injectable({
  providedIn: "root"
})
export class MaterialsDataService {
  constructor(private inventoryApiService: InventoryApiService) {}

  public getMaterialsData(filters: MaterialsFilters): Observable<Material[]> {
    return this.inventoryApiService.queryMaterials(filters);
  }

  public createMaterial() {

  }

  public editMaterial() {

  }
}
