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
    const id = this.router.getCurrentNavigation()?.extras.state?.["itemId"];
    const type = this.router.getCurrentNavigation()?.extras.state?.["type"];
    console.log("id ", id, " type ", type);
    this.inventoryDetailsStore.getInventoryDetails({ filters: id, type });
  }

  protected isMaterial(inventoryDetails: Equipment | Material | null): boolean {
    return Material.isMaterial(inventoryDetails);
  }

  protected isEquipment(inventoryDetails: Equipment | Material | null): boolean {
    return Equipment.isEquipment(inventoryDetails);
  }
}
