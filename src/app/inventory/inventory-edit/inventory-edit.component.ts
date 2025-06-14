import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { PageWrapperComponent } from "../../shared/page-wrapper/page-wrapper.component";

// import { InventoryEditStore } from "./inventory-edit.store";

@Component({
  selector: "app-inventory-edit",
  templateUrl: "./inventory-edit.component.html",
  styleUrls: ["./inventory-edit.component.scss"],
  imports: [PageWrapperComponent],
  standalone: true,
})
export class InventoryEditComponent {
  protected readonly title: string = "Add Inventory";
  protected editInventory = true;

  constructor(private router: Router) {
    this.editInventory =
      this.router.url !== "/inventory/create" &&
      this.router.url !== "/inventory/create/equipment" &&
      this.router.url !== "/inventory/create/material";
    const itemType = this.router.getCurrentNavigation()?.extras.state?.["type"];

    if (this.editInventory) {
      this.title = "Edit Inventory";
      const itemId =
        this.router.getCurrentNavigation()?.extras.state?.["itemId"];
    }
  }
}
