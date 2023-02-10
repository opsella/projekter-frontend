import { Injectable } from "@angular/core";
import { InventoryApiService } from "../services/inventory-api.service";
import { Observable } from "rxjs";
import { Material } from "./models/material";
import { MaterialsFilters } from "../queries/materials-queries";

@Injectable({
  providedIn: "root"
})
export class MaterialsDataService {
  constructor(private inventoryApiService: InventoryApiService) {}

  public getMaterialsData(filters: MaterialsFilters): Observable<Material[]> {
    return this.inventoryApiService.queryMaterials(filters);
  }
}
