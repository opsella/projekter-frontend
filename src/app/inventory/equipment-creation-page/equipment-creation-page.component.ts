import { Component } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { conditionalRequired } from "../../shared/conditional-required.validator";

@Component({
    selector: "app-equipment-creation-page",
    templateUrl: "./equipment-creation-page.component.html",
    styleUrls: ["./equipment-creation-page.component.scss"],
})
export class EquipmentCreationPageComponent {
    public categories = ["Tools", "Vehicles"];

    constructor(private _formBuilder: FormBuilder) {}

    public itemInformationGroup = this._formBuilder.group({
        name: new FormControl("", [Validators.required]),
        code: new FormControl("", [Validators.required]),
        description: new FormControl("", [Validators.required])
    });

    public categoryInformationGroup = this._formBuilder.group({
        options: new FormControl(this.categories),
        name: new FormControl(""),
        description: new FormControl("")
    }, {
        validators: [
            conditionalRequired("name", ["description"]),
            conditionalRequired("description", ["name"])
        ]
    });
}
