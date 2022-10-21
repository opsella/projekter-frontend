import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: "app-inventory-supplies-creation",
    templateUrl: "./inventory-supplies-creation.component.html",
    styleUrls: ["./inventory-supplies-creation.component.scss"],
})
export class InventorySuppliesCreationComponent {
    constructor(private _formBuilder: FormBuilder) {}

    public firstFormGroup = this._formBuilder.group({
        firstCtrl: ["", Validators.required],
    });
    public secondFormGroup = this._formBuilder.group({
        secondCtrl: ["", Validators.required],
    });
}
