import { Component } from "@angular/core";
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
    selector: "app-inventory-setup-page",
    templateUrl: "./setup-page.component.html",
    styleUrls: ["./setup-page.component.scss"],
})
export class SetupPageComponent {
    constructor(private _formBuilder: FormBuilder) {}

    public inventoryType = this._formBuilder.group({
        options: new FormControl("/inventory/create/supplies", [Validators.required]),
    });

    public get itemRoute(): string {
      return this.inventoryType.controls.options.value!;
    }
}
