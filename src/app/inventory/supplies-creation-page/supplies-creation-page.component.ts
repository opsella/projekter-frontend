import { Component } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { conditionalRequired } from "../../shared/conditional-required.validator";

@Component({
    selector: "app-inventory-supplies-creation",
    templateUrl: "./supplies-creation-page.component.html",
    styleUrls: ["./supplies-creation-page.component.scss"],
})
export class SuppliesCreationPageComponent {
    public categories = ["Tools", "Vehicles"];

    constructor(private _formBuilder: FormBuilder) {
    }

    public itemInformationGroup = this._formBuilder.group({
        name: new FormControl("", [Validators.required]),
        code: new FormControl("", [Validators.required]),
        description: new FormControl("", [Validators.required]),
        qty: new FormControl("", [Validators.required])
    });

    public categoryInformationGroup = this._formBuilder.group({
        options: new FormControl(this.categories),
        name: new FormControl(""),
        description: new FormControl(""),
    }, {
        validators: [
            conditionalRequired("name", ["description"]),
            conditionalRequired("description", ["name"])
        ]
    });
}
