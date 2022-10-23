import { Component } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { conditionalRequired } from "../../shared/conditional-required.validator";

@Component({
    selector: "app-inventory-equipment-creation",
    templateUrl: "./inventory-equipment-creation.component.html",
    styleUrls: ["./inventory-equipment-creation.component.scss"],
})
export class InventoryEquipmentCreationComponent {
    constructor(private _formBuilder: FormBuilder) {}

    public firstFormGroup = this._formBuilder.group({
        firstCtrl: new FormControl("", Validators.minLength(2)),
        requiredControl: new FormControl("")
    }, {
        validators: [
            conditionalRequired("firstCtrl", ["requiredControl"]),
            conditionalRequired("requiredControl", ["firstCtrl"])
        ]
    });

    public secondFormGroup = this._formBuilder.group({
        secondCtrl: new FormControl("", [Validators.required]),
    });
}
