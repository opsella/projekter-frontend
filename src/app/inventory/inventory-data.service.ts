import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class InventoryDataService {
  constructor(
  ) {
  }

  private readonly SUPPORTED_INVENTORY_TYPES = {
    equipment : "equipment",
    materials : "materials"
  };


}
