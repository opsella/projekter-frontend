import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: "app-inventory-equipment-creation",
    templateUrl: "./inventory-equipment-creation.component.html",
    styleUrls: ["./inventory-equipment-creation.component.scss"],
})
export class InventoryEquipmentCreationComponent {
    constructor(private _formBuilder: FormBuilder) {}

    public firstFormGroup = this._formBuilder.group({
        firstCtrl: ["", Validators.required],
    });
    public secondFormGroup = this._formBuilder.group({
        secondCtrl: ["", Validators.required],
    });
}
