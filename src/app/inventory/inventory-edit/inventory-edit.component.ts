import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { InventoryDetailsStore } from "../inventory-details/inventory-details.store";
import { Equipment } from "../../models/equipment";
import { Material } from "../../models/material";

// import { InventoryEditStore } from "./inventory-edit.store";

@Component({
  selector    : "app-inventory-edit",
  templateUrl : "./inventory-edit.component.html",
  styleUrls   : ["./inventory-edit.component.scss"],
  // providers   : [InventoryEditStore]
})
export class InventoryEditComponent {
  public readonly vm$ = this.inventoryEditStore.vm$;

  constructor(
    private router: Router,
    private readonly inventoryEditStore: InventoryDetailsStore
  ) {
    this.inventoryEditStore.getInventoryDetails(this.router.getCurrentNavigation()?.extras.state?.["itemId"]);
  }

  protected isMaterial(inventoryDetails: Equipment | Material | null): boolean {
    return Material.isMaterial(inventoryDetails);
  }

  protected isEquipment(inventoryDetails: Equipment | Material | null): boolean {
    return Equipment.isEquipment(inventoryDetails);
  }
}
