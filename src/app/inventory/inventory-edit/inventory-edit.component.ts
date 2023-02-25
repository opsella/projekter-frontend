import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { InventoryEditStore } from "./inventory-edit.store";

// import { InventoryEditStore } from "./inventory-edit.store";

@Component({
  selector    : "app-inventory-edit",
  templateUrl : "./inventory-edit.component.html",
  styleUrls   : ["./inventory-edit.component.scss"],
  providers   : [InventoryEditStore]
})
export class InventoryEditComponent {
  public readonly vm$ = this.inventoryEditStore.vm$;
  protected readonly title: string = "Add Inventory";
  protected editInventory = true;

  constructor(
    private router: Router,
    private readonly inventoryEditStore: InventoryEditStore
  ) {
    this.editInventory = (this.router.url !== "/inventory/create" && this.router.url !== "/inventory/create/equipment" && this.router.url !== "/inventory/create/material");
    const itemType = this.router.getCurrentNavigation()?.extras.state?.["type"];

    this.inventoryEditStore.setInventoryType(itemType);

    if (this.editInventory) {
      this.title = "Edit Inventory";
      const itemId = this.router.getCurrentNavigation()?.extras.state?.["itemId"];

      this.inventoryEditStore.getInventoryDetailsForEdit({ itemId, type: itemType });
      this.inventoryEditStore.setInventoryItemId(itemId);
    }
  }
}
