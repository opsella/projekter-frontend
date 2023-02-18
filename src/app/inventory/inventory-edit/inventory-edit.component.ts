import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { InventoryEditStore } from "./inventory-edit.store";
import { Material } from "../../models/material";
import { Equipment } from "../../models/equipment";

// import { InventoryEditStore } from "./inventory-edit.store";

@Component({
  selector    : "app-inventory-edit",
  templateUrl : "./inventory-edit.component.html",
  styleUrls   : ["./inventory-edit.component.scss"],
  providers   : [InventoryEditStore]
})
export class InventoryEditComponent {
  public readonly vm$ = this.inventoryEditStore.vm$;

  constructor(
    private router: Router,
    private readonly inventoryEditStore: InventoryEditStore
  ) {
    const itemId = this.router.getCurrentNavigation()?.extras.state?.["itemId"];
    const itemType = this.router.getCurrentNavigation()?.extras.state?.["type"];
    this.inventoryEditStore.setInventoryType(itemType);
    if (itemId) {
      this.inventoryEditStore.getInventoryDetailsForEdit({ itemId, type: itemType });
      this.inventoryEditStore.setInventoryItemId(itemId);
    }
  }

  protected isMaterial(inventoryDetails: Equipment | Material | null): boolean {
    return Material.isMaterial(inventoryDetails);
  }

  protected isEquipment(inventoryDetails: Equipment | Material | null): boolean {
    return Equipment.isEquipment(inventoryDetails);
  }
}
