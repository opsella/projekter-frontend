import { Component } from "@angular/core";
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
    selector: "app-inventory-setup-page",
    templateUrl: "./inventory-setup-page.component.html",
    styleUrls: ["./inventory-setup-page.component.scss"],
})
export class InventorySetupPageComponent {
    public addInventory = false;

    constructor(private _formBuilder: FormBuilder) {}

    public inventoryType = this._formBuilder.group({
        options: new FormControl("/inventory/create/supplies", [Validators.required]),
    });

    public get itemRoute(): string {
      return this.inventoryType.controls.options.value!;
    }

    public startProcess() {
        this.addInventory = !this.addInventory;
    }
}
