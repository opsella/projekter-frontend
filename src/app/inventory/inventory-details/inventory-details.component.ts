import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { InventoryDetailsStore } from "./inventory-details.store";
import { Material } from "../../models/material";
import { Equipment } from "../../models/equipment";

@Component({
  selector    : "app-inventory-view",
  templateUrl : "./inventory-details.component.html",
  styleUrls   : ["./inventory-details.component.scss"],
  providers   : [InventoryDetailsStore]
})
export class InventoryDetailsComponent {
  public readonly vm$ = this.inventoryDetailsStore.vm$;

  constructor(
    private router: Router,
    private readonly inventoryDetailsStore: InventoryDetailsStore
  ) {
    this.inventoryDetailsStore.getInventoryDetails(this.router.getCurrentNavigation()?.extras.state?.["itemId"]);
  }

  protected isMaterial(inventoryDetails: Equipment | Material): boolean {
    return Material.isMaterial(inventoryDetails);
  }

  protected isEquipment(inventoryDetails: Equipment | Material): boolean {
    return Equipment.isEquipment(inventoryDetails);
  }
}
